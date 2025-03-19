'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';

export default function CreatePostPage() {
  const [postText, setPostText] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handlePost = () => {
    console.log('Post Content:', postText);
    console.log('Attached Files:', files);
    // Implement post logic here
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-4">
      <Card className="shadow-md p-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Create Post</h2>
          <Textarea
            placeholder="What's on your mind?"
            className="w-full border rounded p-2"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <div className="mt-4 space-y-2">
            <label className="flex items-center gap-2 cursor-pointer text-blue-500">
              <Upload size={20} />
              <span>Add Images/Videos</span>
              <Input type="file" multiple className="hidden" onChange={handleFileChange} />
            </label>
            {files.length > 0 && (
              <div className="text-sm text-gray-500">{files.length} file(s) selected</div>
            )}
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="ghost" onClick={() => setPostText('')}>Cancel</Button>
            <Button className="bg-blue-500 text-white" onClick={handlePost}>Post</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
