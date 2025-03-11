'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CommunityPage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Welcome John</h1>

      {/* Search Box */}
      <Input
        type="text"
        placeholder="Find a community"
        className="w-full p-3 border rounded-lg mb-6"
      />

      {/* Community Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: 'CSK', img: '/csk.jpg' },
          { name: 'Music', img: '/music.jpg' },
          { name: 'Debate', img: '/debate.jpg' },
          { name: 'Wildlife', img: '/wildlife.jpg' },
        ].map((community, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={community.img}
              alt={community.name}
              width={300}
              height={160}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-3 text-lg font-semibold">
              {community.name}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Community Button */}
      <Button
        className={`mt-6 px-6 py-3 text-lg font-semibold rounded-lg transition-colors ${
          buttonClicked ? 'bg-green-600' : 'bg-blue-500'
        } hover:bg-green-400`}
        onClick={() => setButtonClicked(true)}
      >
        Create a Community
      </Button>
    </div>
  );
}
