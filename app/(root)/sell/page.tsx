'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function SellItemPage() {
  const [images, setImages] = useState<string[]>([]);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...fileArray]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Sell Your Item</h1>
      
      <Card className="p-6 space-y-4">
        <Input type="text" placeholder="Product Name" className="w-full" />
        
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="home">Home & Living</SelectItem>
            <SelectItem value="vehicles">Vehicles</SelectItem>
          </SelectContent>
        </Select>
        
        <Input type="number" placeholder="Price" className="w-full" />
        <Textarea placeholder="Product Description" className="w-full" />
        
        <Input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        
        <div className="grid grid-cols-3 gap-4 mt-2">
          {images.map((src, index) => (
            <Image key={index} src={src} alt="Uploaded" width={100} height={100} className="rounded-md object-cover w-full h-32" />
          ))}
        </div>
        
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="used">Used</SelectItem>
          </SelectContent>
        </Select>

        <Input type="text" placeholder="Location" className="w-full" />
        <Input type="text" placeholder="Contact Details" className="w-full" />
        
        <Button className="w-full bg-green-500 text-white">Post Item</Button>
      </Card>
    </div>
  );
}
