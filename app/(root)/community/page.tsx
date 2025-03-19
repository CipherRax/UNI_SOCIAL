'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import Link from "next/link";

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
    { name: 'CSK', img: '/avatars/sport.jpeg' },
    { name: 'Music', img: '/avatars/music.jpeg' },
    { name: 'Debate', img: '/avatars/debate.jpeg' },
    { name: 'Wildlife', img: '/avatars/wildlife.jpeg' },
  ].map((community, index) => (
    <Link key={index} href={`/communityP`} passHref>
      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition">
        <Image
          src={community.img}
          alt={community.name}
          width={300}
          height={160}
          className="w-full h-50 object-cover"
        />
        <CardContent className="p-4 text-lg font-semibold text-center">
          {community.name}
        </CardContent>
      </Card>
    </Link>
  ))}
</div>


      {/* Create Community Button */}


{/* Create Community Button */}
<Link
  href="/Ccommunity"
  className={`mt-6 px-6 py-3 text-lg font-semibold rounded-lg transition-colors ${
    buttonClicked ? 'bg-green-600' : 'bg-blue-500'
  } hover:bg-green-400 flex justify-center items-center`}
>
  Create a Community
</Link>

    </div>
  );
}
