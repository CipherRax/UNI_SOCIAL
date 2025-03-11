'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const categories = [
  { title: 'Academics' },
  { title: 'Sports' },
  { title: 'Welfare' },
  { title: 'Facilities' },
  { title: 'Guidance & Counseling' },
  { title: 'Add Item' }
];

export default function Noticeboard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddItemPopupOpen, setIsAddItemPopupOpen] = useState(false);
  const [selectedCommentCategory, setSelectedCommentCategory] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState<{ [key: string]: string[] }>({});

  const handleCardClick = (category: string) => {
    if (category === 'Add Item') {
      setIsAddItemPopupOpen(true);
    } else {
      setSelectedCategory(category);
      setIsPopupOpen(true);
    }
  };

  const handleAddComment = () => {
    if (selectedCommentCategory && comment.trim() !== '') {
      setPosts((prevPosts) => ({
        ...prevPosts,
        [selectedCommentCategory]: [...(prevPosts[selectedCommentCategory] || []), comment]
      }));
      setComment('');
      setIsAddItemPopupOpen(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center">Access Informal Communication (Anonymous)</h1>
      <h2 className="text-lg text-gray-600 text-center">Browse by Category</h2>

      {/* Categories */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {categories.map((item, index) => (
          <Card
            key={index}
            className="p-6 flex items-center justify-center text-lg font-semibold cursor-pointer
                       bg-gradient-to-r from-green-300 via-green-500 to-green-900
                       bg-[length:200%_200%] animate-light-move
                       text-white rounded-lg shadow-lg backdrop-blur-lg"
            onClick={() => handleCardClick(item.title)}
          >
            {item.title}
          </Card>
        ))}
      </div>

      {/* Two Large Image Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Card className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg">
          <Image 
            src="/avatars/school_event.jpeg" 
            alt="School Event" 
            layout="fill" 
            objectFit="cover"
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </Card>

        <Card className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg">
          <Image 
            src="/avatars/announcement.jpeg" 
            alt="Announcement" 
            layout="fill" 
            objectFit="cover"
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </Card>
      </div>

      {/* General Popup for Categories */}
      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCategory}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center">Latest Updates</Card>
            <Card className="p-4 text-center">Discussions</Card>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">All Posts</h3>
            {posts[selectedCategory!] && posts[selectedCategory!].length > 0 ? (
              <div className="space-y-2 mt-2">
                {posts[selectedCategory!].map((post, index) => (
                  <Card key={index} className="p-3">
                    {post}
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No posts yet.</p>
            )}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsPopupOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Item Popup */}
      <Dialog open={isAddItemPopupOpen} onOpenChange={setIsAddItemPopupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a Comment</DialogTitle>
          </DialogHeader>
          <Select onValueChange={setSelectedCommentCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories
                .filter((cat) => cat.title !== 'Add Item')
                .map((cat, index) => (
                  <SelectItem key={index} value={cat.title}>
                    {cat.title}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <DialogFooter>
            <Button onClick={() => setIsAddItemPopupOpen(false)}>Cancel</Button>
            <Button onClick={handleAddComment}>Post Comment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Tailwind Animation Keyframes */}
      <style>
        {`
          @keyframes lightMove {
            0% { background-position: -100% 0%; }
            50% { background-position: 200% 0%; }
            100% { background-position: -100% 0%; }
          }

          .animate-light-move {
            animation: lightMove 4s infinite linear;
          }
        `}
      </style>
    </div>
  );
}
