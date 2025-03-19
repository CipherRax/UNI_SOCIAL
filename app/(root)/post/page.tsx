'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SuggestionBox() {
  const [category, setCategory] = useState('');
  const [cc, setCC] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Title & Subtitle */}
      <h1 className="text-2xl font-bold text-center">KyU Suggestion Box</h1>
      <p className="text-gray-600 text-center">Drop your thoughts here</p>

      {/* Category Dropdown */}
      <div>
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={setCategory}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Academic">Academic</SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Welfare">Welfare</SelectItem>
            <SelectItem value="Faculties">Faculties</SelectItem>
            <SelectItem value="Guidance and Counselling">Guidance and Counselling</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Subject Input */}
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="Type a subject" />
      </div>

      {/* My Thoughts Textarea */}
      <div>
        <Label htmlFor="thoughts">My Thoughts</Label>
        <Textarea id="thoughts" placeholder="Type your message" />
      </div>

      {/* File Upload */}
      <div>
        <Label htmlFor="file">Attach a file</Label>
        <Input id="file" type="file" />
      </div>

      {/* CC Dropdown */}
      <div>
        <Label htmlFor="cc">CC</Label>
        <Select onValueChange={setCC}>
          <SelectTrigger id="cc">
            <SelectValue placeholder="Select a department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Psychology">Department of Psychology</SelectItem>
            <SelectItem value="Biology">Department of Biology</SelectItem>
            <SelectItem value="Computer Science">Department of Computer Science</SelectItem>
            <SelectItem value="Business Administration">Department of Business Administration</SelectItem>
            <SelectItem value="History">Department of History</SelectItem>
            <SelectItem value="Engineering">Department of Engineering</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Buttons (Cancel & Submit) */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}
