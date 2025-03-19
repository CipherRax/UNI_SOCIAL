'use client';

import Feed from '@/components/feed'; // Import the Feed component

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Render the feed here */}
      <main className="flex-1">
        <Feed /> {/* Render the Feed component here */}
      </main>
    </div>
  );
}
