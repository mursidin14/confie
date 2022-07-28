import React from 'react';

export default function Home() {
  React.useEffect(()=> {
    window.location.href = '/login'
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <img className="animate-pulse" src="/logo.png" alt="" />
    </main>
  );
}
