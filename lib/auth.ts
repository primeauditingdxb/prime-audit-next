import { jwtVerify, createRemoteJWKSet } from 'jose';

const JWKS_URL = process.env.JWKS_URL;
const AUTH_URL = process.env.Auth_URL;

/**
 * JWKS Set for verifying tokens from Neon Auth
 * Caches the keys for better performance
 */
const JWKS = JWKS_URL ? createRemoteJWKSet(new URL(JWKS_URL)) : null;

/**
 * Verifies a JWT token from Neon Auth
 * 
 * @param token The JWT string (usually from the __session cookie)
 * @returns The decoded payload if valid, null otherwise
 */
export async function verifyAuthToken(token: string) {
  if (!JWKS || !AUTH_URL) {
    console.warn('Neon Auth environment variables (JWKS_URL, Auth_URL) are missing.');
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: new URL(AUTH_URL).origin,
    });
    
    return payload;
  } catch (error) {
    console.error('Auth verification error:', error);
    return null;
  }
}
