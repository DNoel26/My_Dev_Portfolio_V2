/** @format */

import { useCallback, useEffect, useState } from 'react';
import useWindowCheck from './useWindowCheck';

/* eslint-disable no-console */
type StorageType = 'local' | 'session';

const getStorageType = (type: StorageType): Storage => {
    if (type === 'local') return localStorage;
    return sessionStorage;
};

const getStorageItem = (storage: Storage, key: string): unknown => {
    const item = storage.getItem(key);
    try {
        return JSON.parse(item || '');
    } catch (err) {
        console.warn(err instanceof Error ? err.message : { err });
        return item || null;
    }
};

const setStorageItem = (storage: Storage, key: string, item: unknown): void => {
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
    const [item, setItem] = useState<unknown>(null);
    const checkedStorageType = useWindowCheck({
        handleEffect: () => getStorageType(storageType),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getItem = () => !!checkedStorageType && getStorageItem(checkedStorageType, key);

    const handleSetItem = useCallback(
        (newItem: unknown) => {
            if (checkedStorageType) {
                setStorageItem(checkedStorageType, key, newItem);
                setItem(getItem());
            }
        },
        [checkedStorageType, key, getItem],
    );

    const handleRemoveItem = useCallback(() => {
        if (checkedStorageType) {
            checkedStorageType.removeItem(key);
            setItem(getItem());
        }
    }, [checkedStorageType, key, getItem]);

    useEffect(() => {
        setItem(getItem());
    }, [getItem]);

    return { item, handleSetItem, handleRemoveItem };
};

export default useClientStorage;
