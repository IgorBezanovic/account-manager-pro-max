import { AUTH_TOKEN } from "./constant";

/**
 * Retrieves the authentication token from localStorage.
 */
export const getToken = (): string | null => {
    return localStorage.getItem(AUTH_TOKEN);
};

/**
 * Stores the authentication token in localStorage.
 * @param token - The JWT token to store
 */
export const setToken = (token: string): void => {
    if (token) {
        localStorage.setItem(AUTH_TOKEN, token);
    }
};

/**
 * Removes the authentication token from localStorage.
 */
export const removeToken = (): void => {
    localStorage.removeItem(AUTH_TOKEN);
};