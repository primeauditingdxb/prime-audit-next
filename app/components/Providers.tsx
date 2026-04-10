'use client';

import { ReactNode } from 'react';
import { NeonAuthUIProvider } from '@neondatabase/auth/react';
import { authClient } from '@/lib/auth/client';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NeonAuthUIProvider authClient={authClient as any}>
      {children}
    </NeonAuthUIProvider>
  );
}
