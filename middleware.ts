import { auth } from '@/lib/auth/server';
import { NextRequest, NextResponse } from 'next/server';

// Create a middleware that redirects unauthenticated users to the sign-in page
const authMiddleware = auth.middleware({
  loginUrl: '/auth/sign-in',
});

export default function middleware(request: NextRequest) {
  // We apply the auth check only to routes under /ppdl-admin
  if (request.nextUrl.pathname.startsWith('/ppdl-admin')) {
    return authMiddleware(request);
  }
  
  return NextResponse.next();
}

/**
 * Configure which routes this middleware should run on
 */
export const config = {
  matcher: ['/ppdl-admin/:path*'],
};
