"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function SuggestionBox() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold text-center">KyU Suggestion Box</h1>
      <h2 className="text-lg text-center text-gray-600 mt-2">Drop your thought here</h2>

      {/* Non-Clickable Cards */}
      <div className="grid gap-4 mt-6">
        <Link href="/noticeboard">
          <Card className="cursor-pointer hover:bg-gray-100 transition">
            <CardContent className="p-6 text-center font-semibold text-lg">Kyu NoticeBoard View and post</CardContent>
          </Card>
        </Link>

        <Link href="/menu">
          <Card className="cursor-pointer hover:bg-gray-100 transition">
            <CardContent className="p-6 text-center font-semibold text-lg">Check out the new menu comrades</CardContent>
          </Card>
        </Link>
      </div>

      {/* Browse by Category */}
      <h3 className="text-xl font-semibold mt-8 text-center">Browse by Category</h3>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Category Cards with Full Image */}
        {["edu.jpeg", "sport1.jpeg", "facility.jpeg", "walfare.jpg", "techOne.jpeg"].map((image, index) => (
          <Link key={index} href={`/category${index + 1}`}>
            <Card className="cursor-pointer hover:bg-gray-100 transition relative overflow-hidden">
              <div className="relative w-full h-48">
                <Image src={`/avatars/${image}`} alt={`Category ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
              <CardContent className="relative bg-black bg-opacity-50 text-white p-4 flex items-center justify-center h-full">
                <p className="font-semibold">Category {index + 1}</p>
              </CardContent>
            </Card>
          </Link>
        ))}

        {/* Post Card (No Image, Just Plus Sign) */}
        <Link href="/post">
          <Card className="cursor-pointer hover:bg-gray-200 transition flex flex-col items-center justify-center h-full">
            <CardContent className="p-4 text-center font-semibold">
              <span className="text-4xl">➕</span>
              <p className="mt-2">Post</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Dropdown Menu */}
      <div className="mt-6 flex justify-center">
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Browse More" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sam">Sam</SelectItem>
            <SelectItem value="yuo">Yuo</SelectItem>
            <SelectItem value="ter">Ter</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
