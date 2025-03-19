"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";

const pages = [
  { name: "Home", path: "/", image: "/images/home.jpg" },
  { name: "Marketplace", path: "/marketPlace", image: "/images/marketplace.jpg" },
  { name: "NoticeBoard", path: "/suggestionB", image: "/images/notice.jpg" },
  { name: "Community", path: "/community", image: "/images/community.jpg" },
  { name: "Campus Feed", path: "/feed", image: "/images/feed.jpg" },
  { name: "Stem", path: "/stem", image: "/images/stem.jpg" },
  { name: "Messages", path: "/messages", image: "/images/messages.jpg" },
  { name: "About", path: "/about", image: "/images/about.jpg" },
  { name: "Varcity Voices", path: "/vacity", image: "/images/voices.jpg" },
];

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (value?: string) => {
    setQuery(value ?? ""); // Ensure it's never undefined
  };

  // Always return an array, even if empty
  const filteredPages = pages.filter((page) =>
    query ? page.name.toLowerCase().includes(query.toLowerCase()) : false
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* 🔹 Top Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 w-full max-w-4xl">
        {pages.map((page) => (
          <Link key={page.path} href={page.path}>
            <div className="relative group rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer h-40">
              {/* 🔥 Image as Background */}
              <Image
                src={page.image}
                alt={page.name}
                fill
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* 🔥 Overlay Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold">{page.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4">Search Page</h1>

      <Command className="w-full max-w-md border rounded-lg shadow-md">
        <CommandInput
          placeholder="Search for a page..."
          onValueChange={handleInputChange}
          value={query}
        />
        {/* 🔥 Fix: Ensure CommandList always gets children */}
        <CommandList>
          {filteredPages.length > 0 ? (
            filteredPages.map((page) => (
              <CommandItem
                key={page.path}
                onSelect={() => router.push(page.path)}
                className="cursor-pointer"
              >
                {page.name}
              </CommandItem>
            ))
          ) : (
            <CommandItem disabled>No results found</CommandItem>
          )}
        </CommandList>
      </Command>

      {/* 🔹 Bottom Images Section */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <Image
          src="/images/sample1.jpg"
          alt="Sample 1"
          width={100}
          height={100}
          className="rounded-lg shadow-md"
        />
        <Image
          src="/images/sample2.jpg"
          alt="Sample 2"
          width={100}
          height={100}
          className="rounded-lg shadow-md"
        />
        <Image
          src="/images/sample3.jpg"
          alt="Sample 3"
          width={100}
          height={100}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
