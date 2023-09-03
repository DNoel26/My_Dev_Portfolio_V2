/** @format */

declare module '*.module.css';
declare module '*.module.scss';

declare global {
    interface Window {
        handleSubmit: (token: unknown) => void;
    }
}

export {};
