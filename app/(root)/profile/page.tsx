'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { UserPlus, Image as ImageIcon, Users } from 'lucide-react';

const user = {
  name: "John Maxwell",
  bio: "Software Engineer | Tech Enthusiast | Foodie",
  coverPhoto: "/avatars/tech3.jpeg",
  profilePhoto: "/avatars/fine.jpeg",
  friends: [
    { name: "Alice Johnson", avatar: "/avatars/alice.jpeg" },
    { name: "Bob Smith", avatar: "/avatars/bob.jpeg" },
    { name: "Charlie Davis", avatar: "/avatars/sam.jpeg" },
    { name: "David Wilson", avatar: "/avatars/purple.jpeg" },
    { name: "Eve Adams", avatar: "/avatars/done.jpeg" },
  ],
};

const posts = [
  { type: 'text', content: "It is always right to do what is right", user: "John Doe" },
  { type: 'image', content: "/avatars/quoteF.jpeg", user: "John Doe" },
  { type: 'text', content: "If your dreams don't scare you, they are not big dreams. Always think big 💻☕", user: "John Doe" },
  { type: 'image', content: "/avatars/quoteFFF.jpeg", user: "John Doe" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Cover Photo & Profile Info */}
      <div className="relative">
        <Image src={user.coverPhoto} alt="Cover" width={800} height={240} className="w-full h-60 object-cover rounded-lg" priority />
        <div className="absolute left-6 -bottom-12 flex items-center">
          <Avatar className="w-28 h-28 border-4 border-white">
            <AvatarImage src={user.profilePhoto} alt="Profile" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-16 flex justify-between items-center">
        <Button variant="outline"><UserPlus size={16} className="mr-2" /> Add Friend</Button>
        <Button variant="outline"><ImageIcon size={16} className="mr-2" /> Edit Profile</Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList className="w-full flex justify-between bg-gray-100 p-2 rounded-lg">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>

        {/* Posts Tab */}
        <TabsContent value="posts" className="mt-4 space-y-4">
          {posts.map((post, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.profilePhoto} alt="User" />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <p className="font-semibold">{user.name}</p>
              </div>
              <CardContent className="mt-3">
                {post.type === 'text' ? (
                  <p className="text-lg">{post.content}</p>
                ) : (
                  <Image src={post.content} alt="User Upload" width={500} height={300} className="w-full h-60 object-cover rounded-lg" priority />
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Friends Tab */}
        <TabsContent value="friends" className="mt-4">
          <Card className="p-4">
            <h2 className="font-bold text-lg flex items-center"><Users size={18} className="mr-2" /> Friends</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {user.friends.map((friend, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm mt-1">{friend.name}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Photos Tab */}
        <TabsContent value="photos" className="mt-4">
          <Card className="p-4">
            <h2 className="font-bold text-lg">Photos</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {["/avatars/girlF.jpeg", "/avatars/girlTwo.jpeg", "/avatars/girlOne.jpeg", "/avatars/quoteF.jpeg", "/avatars/tech5.jpeg", "/avatars/sport2.jpeg"].map((photo, index) => (
                <Image key={index} src={photo} alt={`Photo ${index + 1}`} width={150} height={128} className="w-full h-32 object-cover rounded-lg" priority />
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
