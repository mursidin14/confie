import React from 'react';
import Gate from 'services/Auth/Gate';

export default function Home() {
  Gate.Authenticate();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <img className="animate-pulse" src="/logo.png" alt="" />
    </main>
  );
}
