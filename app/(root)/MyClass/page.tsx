'use client';
import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MoreVertical, Circle } from 'lucide-react';

const classmates = [
  { name: 'Alice Johnson', image: '/avatars/alice.jpeg', link: '/profile/alice' },
  { name: 'Bob Smith', image: '/avatars/bob.jpg', link: '/profile/bob' },
  { name: 'Charlie Davis', image: '/avatars/charlie.jpg', link: '/profile/charlie' },
  { name: 'Purple Done', image: '/avatars/purple.jpeg', link: '/profile/purple' },
  { name: 'Sam Oliver', image: '/avatars/sam.jpeg', link: '/profile/sam' },
  { name: 'Alice Gollyup', image: '/avatars/alice.jpeg', link: '/profile/aliceg' },
  { name: 'Frack Line', image: '/avatars/fine.jpeg', link: '/profile/frack' },
  { name: 'Orange Sam', image: '/avatars/orange.jpeg', link: '/profile/orange' },
  { name: 'Bob Johns', image: '/avatars/bob.jpeg', link: '/profile/bobj' },
];

const cards = [
  { title: 'Database Management' },
  { title: 'Operating Systems' },
  { title: 'Computer Networks' },
  { title: 'Software Engineering' },
  { title: 'Artificial Intelligence' },
  { title: 'Web Development' },
  { title: 'Cyber Security' },
];

export default function ITDashboard() {
  // const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Title and Subtitle */}
      <div>
        <h1 className="text-3xl font-bold">BSc Information Technology</h1>
        <p className="text-gray-500">Academic: 2025/20 Level Y2Sem2</p>
      </div>

      {/* Classmates Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Classmates</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          {classmates.map((mate, index) => (
            <DropdownMenuItem key={index} className="flex items-center gap-3">
              <Link href={mate.link} className="flex items-center gap-3 w-full hover:bg-gray-100 p-2 rounded-md">
                <Avatar>
                  <AvatarImage src={mate.image} alt={mate.name} />
                  <AvatarFallback className="bg-gray-300 text-black">{mate.name[0]}</AvatarFallback>
                </Avatar>
                <span>{mate.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Card key={index} className="relative p-4">
            {/* Green Dot */}
            <Circle className="absolute top-2 left-2 text-green-500" size={10} />
            
            {/* Card Content */}
            <CardContent className="text-lg font-semibold">{card.title}</CardContent>
            
            {/* More Options */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="absolute bottom-2 right-2">
                  <MoreVertical size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/discussion" className="w-full block">Discussion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/QA" className="w-full block">Q & A Hub</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Card>
        ))}
      </div>
    </div>
  );
}
