import { createContext, Dispatch } from 'react';

/**
 * Context interface for AuthAuthentication/Authorization
 *
 * @property isAuthenticated
 * @property dispatch
 *
 * @interface
 */
interface AuthDefaultContext {
    isAuthenticated: boolean;
    dispatch: Dispatch<any>
}

/**
 * Authentication/Authorization context for managing
 * authenticating/ed and authorizing/ed users
 */
export const AuthContext = createContext<AuthDefaultContext>({
    isAuthenticated: true,
    dispatch: () => {}
});