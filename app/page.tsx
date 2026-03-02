'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import IntroLaunch from "@/components/IntroLaunch";

export default function IntroPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black relative overflow-x-hidden">
      <IntroLaunch onLaunchComplete={() => router.push('/home')} />
    </main>
  );
}
