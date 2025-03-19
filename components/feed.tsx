'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const PostCard = ({ isMainPost, imageSrc, profileSrc, username }: { isMainPost?: boolean; imageSrc: string; profileSrc: string; username: string }) => {
  return (
    <div 
      className={`relative ${isMainPost ? 'w-full h-72' : 'w-full h-60'} bg-white shadow-lg rounded-md overflow-hidden cursor-pointer`} 
      onClick={() => alert(`${username}'s post clicked!`)}
    >
      {/* Profile Section */}
      <div className="flex items-center p-2 border-b">
        <Image
          src={profileSrc}
          alt="Profile Picture"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="font-semibold text-sm">{username}</span>
      </div>

      {/* Post Image */}
      <div className="w-full h-full bg-gray-200 relative">
        <Image src={imageSrc} alt="Post" layout="fill" objectFit="cover" />
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Heart className="text-gray-700 hover:text-red-500 cursor-pointer" />
          <MessageCircle className="text-gray-700 hover:text-blue-500 cursor-pointer" />
          <Share2 className="text-gray-700 hover:text-gray-600 cursor-pointer" />
        </div>
        <div>
          <span className="text-xs text-gray-500">10 minutes ago</span>
        </div>
      </div>
    </div>
  );
};

const Feed = () => {
  const posts = [
    { imageSrc: "/avatars/techOne.jpeg", profileSrc: "/avatars/alice.jpeg", username: "Alice" },
    { imageSrc: "/avatars/tech4.jpeg", profileSrc: "/avatars/bob.jpeg", username: "Bob" },
    { imageSrc: "/avatars/quoteFFF.jpeg", profileSrc: "/avatars/charlie.jpg", username: "Charlie" },
    { imageSrc: "/avatars/quoteR.jpeg", profileSrc: "/avatars/sam.jpeg", username: "David" },
    { imageSrc: "/avatars/quoteF.jpeg", profileSrc: "/avatars/done.jpeg", username: "Emma" },
    { imageSrc: "/avatars/postQuotTwo.jpeg", profileSrc: "/avatars/orange.jpeg", username: "Frank" },
    { imageSrc: "/avatars/sport1.jpeg", profileSrc: "/avatars/fine.jpeg", username: "Grace" },
    { imageSrc: "/avatars/sport2.jpeg", profileSrc: "/avatars/sam.jpeg", username: "Hannah" },
    { imageSrc: "/avatars/sport3.jpeg", profileSrc: "/avatars/girlOne.jpeg", username: "Ian" },
    { imageSrc: "/avatars/musk3.jpeg", profileSrc: "/avatars/girlF.jpeg", username: "Faith" },
    { imageSrc: "/avatars/fact1.jpeg", profileSrc: "/avatars/girlTwo.jpeg", username: "Kelly" },
    { imageSrc: "/avatars/robot.jpeg", profileSrc: "/avatars/musk3.jpeg", username: "Liam" },
    { imageSrc: "/avatars/server.jpeg", profileSrc: "/avatars/profile13.jpeg", username: "Mia" },
    { imageSrc: "/avatars/musk2.jpeg", profileSrc: "/avatars/profile14.jpeg", username: "Noah" },
    { imageSrc: "/avatars/future1.jpeg", profileSrc: "/avatars/profile15.jpeg", username: "Olivia" },
  ];

  return (
    <div className="space-y-6 px-4 py-6 max-w-6xl mx-auto">
      {/* First large post */}
      <PostCard isMainPost={true} imageSrc="/avatars/tech5.jpeg" profileSrc="/avatars/fine.jpeg" username="MainUser" />

      {/* Responsive Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <PostCard key={index} imageSrc={post.imageSrc} profileSrc={post.profileSrc} username={post.username} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
