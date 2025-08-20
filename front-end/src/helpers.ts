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

export const isTokenValid = (token: string | null): boolean => {
    if (!token) return false;

    try {
        const payloadBase64 = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));

        const exp = decodedPayload.exp;
        if (!exp) return false;

        const now = Math.floor(Date.now() / 1000);
        return exp > now;
    } catch (error) {
        console.error("Invalid token format:", error);
        return false;
    }
};

export const getValidToken = (): string | null => {
    const token = getToken();

    if (!token || !isTokenValid(token)) {
        removeToken();
        console.log('expired')
        // send error message that session is expired
        return null;
    }
    return token;
};
