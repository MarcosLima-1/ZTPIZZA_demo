'use client'
import { SessionProvider } from 'next-auth/react';

export default function SessionContext({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
