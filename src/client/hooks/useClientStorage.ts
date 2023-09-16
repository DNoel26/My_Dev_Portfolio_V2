/** @format */

import { useCallback } from 'react';
import useWindowCheck from './useWindowCheck';

/* eslint-disable no-console */
type StorageType = 'local' | 'session';

export const getStorageType = (type: StorageType): Storage => {
    if (type === 'local') return localStorage;
    return sessionStorage;
};

export const getStorageItem = (storage: Storage, key: string): unknown => {
    const item = storage.getItem(key);
    try {
        if (typeof item === 'string') {
            return JSON.parse(item);
        }
        return null;
    } catch (err) {
        console.warn(err instanceof Error ? err.message : { err });
        return null;
    }
};

export const setStorageItem = (storage: Storage, key: string, item: unknown): void => {
    try {
        storage.setItem(key, JSON.stringify(item));
    } catch (err) {
        console.warn(err instanceof Error ? err.message : { err });
    }
};

/**
 * A hook for getting and/or setting
 * local or session storage
 * @param storageType
 * @param key
 * @param defaultValue
 * @returns
 */
const useClientStorage = (storageType: StorageType, key: string) => {
    const checkedStorageType = useWindowCheck({
        handleEffect: useCallback(() => getStorageType(storageType), [storageType]),
    });
    const getItem = () => {
        if (checkedStorageType) {
            return getStorageItem(checkedStorageType, key);
        }
        return null;
    };
    const handleSetItem = (newItem: unknown) => {
        if (checkedStorageType) {
            setStorageItem(checkedStorageType, key, newItem);
        }
    };
    const handleRemoveItem = () => {
        if (checkedStorageType) {
            checkedStorageType.removeItem(key);
        }
    };

    return { getItem, handleSetItem, handleRemoveItem };
};

export default useClientStorage;
