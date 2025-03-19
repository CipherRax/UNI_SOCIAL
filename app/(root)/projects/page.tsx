"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewProjectPage() {
  // State for form inputs
  const [category, setCategory] = useState("agriculture");
  const [title, setTitle] = useState("");
  const [background, setBackground] = useState("");
  const [milestone, setMilestone] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Function to reset all fields
  const resetForm = () => {
    setCategory("agriculture");
    setTitle("");
    setBackground("");
    setMilestone("");
    setVisibility("public");
    setSelectedFile(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* New Project Button (Clears Form) */}
      <Button 
        className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg mb-6" 
        onClick={resetForm}
      >
        New Project
      </Button>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="mt-2 w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="agriculture">Agriculture</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="medical">Medical</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Project Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Project Title</label>
        <Input 
          type="text" 
          placeholder="Enter project title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="mt-2 w-full" 
        />
      </div>

      {/* Background */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Background</label>
        <Textarea 
          placeholder="Describe your background" 
          value={background} 
          onChange={(e) => setBackground(e.target.value)} 
          className="mt-2 w-full" 
        />
      </div>

      {/* Project Milestone */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Project Milestone</label>
        <Textarea 
          placeholder="Outline project milestone" 
          value={milestone} 
          onChange={(e) => setMilestone(e.target.value)} 
          className="mt-2 w-full" 
        />
      </div>

      {/* Public / Private Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Set Project as</label>
        <div className="mt-2 flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="visibility" 
              value="public" 
              checked={visibility === "public"} 
              onChange={() => setVisibility("public")} 
              className="w-4 h-4" 
            />
            <span>Public</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="visibility" 
              value="private" 
              checked={visibility === "private"} 
              onChange={() => setVisibility("private")} 
              className="w-4 h-4" 
            />
            <span>Private</span>
          </label>
        </div>
      </div>

      {/* File Upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Attach a File</label>
        <input 
          type="file" 
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} 
          className="mt-2 block w-full cursor-pointer border border-gray-300 rounded-md p-2" 
        />
        {selectedFile && <p className="text-sm text-gray-600 mt-2">Selected: {selectedFile.name}</p>}
      </div>

      {/* Start Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg">
          Start
        </Button>
      </div>
    </div>
  );
}
