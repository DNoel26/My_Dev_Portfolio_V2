/** @format */

import { useEffect, useState } from 'react';

interface IArgs<Type> {
    handleEffect: (...args: unknown[]) => Type;
    handleCleanup?: (...args: unknown[]) => void;
}

/**
 * Checks if window is defined and then sets and returns state equal to value
 * returned from handleEffect
 * @param
 * @returns
 */
const useWindowCheck = <TypeState = unknown>({
    handleEffect,
    handleCleanup,
}: IArgs<TypeState>): TypeState | undefined => {
    const [state, setState] = useState<TypeState>();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const value = handleEffect();
            setState(value);
        }
        return () => handleCleanup && handleCleanup();
    }, [handleEffect, handleCleanup]);
    return state;
};

export default useWindowCheck;
