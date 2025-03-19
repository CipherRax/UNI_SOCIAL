'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Image as ImageIcon } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const initialPosts = [
  { type: 'text', content: "The best way to predict the future is to create it.", user: "Alice Johnson" },
  { type: 'text', content: "Your limitation—it’s only your imagination.", user: "Bob Smith" },
  { type: 'text', content: "Push yourself, because no one else is going to do it for you.", user: "Charlie Davis" },
  { type: 'image', content: "/sample1.jpg", user: "David Wilson" },
  { type: 'text', content: "Great things never come from comfort zones.", user: "Eve Adams" },
  { type: 'image', content: "/sample2.jpg", user: "Frankie Lee" },
  { type: 'text', content: "Dream it. Wish it. Do it.", user: "Grace Kelly" },
  { type: 'image', content: "/sample3.jpg", user: "Hannah White" },
  { type: 'text', content: "Success doesn’t just find you. You have to go out and get it.", user: "Ian Thomas" },
  { type: 'image', content: "/sample4.jpg", user: "Jack Miller" },
];

export default function FoodForThoughts() {
  const [posts, setPosts] = useState(initialPosts);
  const [openType, setOpenType] = useState<'text' | 'image' | null>(null);
  const [newText, setNewText] = useState('');
  const [newImage, setNewImage] = useState<File | null>(null);
  const [showTextArea, setShowTextArea] = useState(false);

  const addPost = () => {
    if (openType === 'text' && newText.trim()) {
      setPosts([{ type: 'text', content: newText, user: "You" }, ...posts]);
      setNewText('');
    } else if (openType === 'image' && newImage) {
      const imageUrl = URL.createObjectURL(newImage);
      setPosts([{ type: 'image', content: imageUrl, user: "You" }, ...posts]);
      setNewImage(null);
    }
    setOpenType(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Food For Thoughts</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><Plus size={20} /></Button>
          </DialogTrigger>
          <DialogContent className="p-4 space-y-3">
            <DialogTitle>Create a Post</DialogTitle>
            <Button variant="outline" onClick={() => setOpenType('text')}>Text</Button>
            <Button variant="outline" onClick={() => setOpenType('image')}>Image</Button>
          </DialogContent>
        </Dialog>
      </div>

      {openType === 'text' && (
        <Card className="p-4 shadow-lg fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white w-96">
          <div className="flex justify-between">
            <h2 className="font-semibold">Text</h2>
            <Button variant="outline" size="sm" onClick={addPost}>Post</Button>
          </div>
          <Textarea className="mt-3" placeholder="Type something..." value={newText} onChange={(e) => setNewText(e.target.value)} />
        </Card>
      )}

      {openType === 'image' && (
        <Card className="p-4 shadow-lg fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white w-96">
          <div className="flex justify-between">
            <h2 className="font-semibold">Image</h2>
            <Button variant="outline" size="sm" onClick={addPost}>Post</Button>
          </div>
          <p className="mt-3 text-center text-gray-500">Add Image</p>
          <label className="flex items-center justify-center w-full border-2 border-dashed p-6 mt-2 cursor-pointer">
            <ImageIcon size={30} />
            <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && setNewImage(e.target.files[0])} />
          </label>
          {newImage && <p className="text-center text-sm text-gray-500">{newImage.name}</p>}
          <Button className="mt-2" variant="outline" onClick={() => setShowTextArea(true)}>Add Text</Button>
          {showTextArea && <Textarea className="mt-2" placeholder="Add description..." />}
        </Card>
      )}

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="/default-avatar.png" alt="User" />
                <AvatarFallback>{post.user[0]}</AvatarFallback>
              </Avatar>
              <p className="font-semibold">{post.user}</p>
            </div>
            <CardContent className="mt-3">
              {post.type === 'text' ? (
                <p className="text-lg">{post.content}</p>
              ) : (
                <Image src={post.content} alt="User Upload" width={500} height={300} className="w-full h-60 object-cover rounded-lg" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
