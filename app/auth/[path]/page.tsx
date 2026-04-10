import { AuthView } from '@neondatabase/auth/react';

export const dynamicParams = false;

// Sign-up is blocked as you only want login functionality
export function generateStaticParams() {
  return [{ path: 'sign-in' }];
  //   return [{ path: 'sign-in' }, { path: 'sign-up' }];
}

export default async function AuthPage({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;

  return (
    <main className="container mx-auto flex min-h-screen grow flex-col items-center justify-center p-4">
      <AuthView path={path} />
    </main>
  );
}

