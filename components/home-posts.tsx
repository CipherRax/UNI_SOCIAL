'use client';

import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react'; // Icons for like, comment, and share

const PostCard = ({ isMainPost }: { isMainPost?: boolean }) => {
  return (
    <div className={`relative ${isMainPost ? 'w-full h-72' : 'w-48 h-60'} bg-white shadow-lg rounded-md overflow-hidden`}>
      <div className="flex items-center p-2 border-b">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile Picture"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="font-semibold text-sm">Username</span>
      </div>
      <div className="w-full h-full bg-gray-200">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Post"
          className="object-cover w-full h-full"
        />
      </div>
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

export default PostCard;
