"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function KyUStem() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Image Card (Top Left) */}
        <Card className="w-40">
          <CardContent className="p-4">
            <Image src="/images/stem-main.jpg" alt="STEM" width={150} height={100} className="rounded-lg" />
          </CardContent>
        </Card>

        {/* Title & Subtitle (Top Center) */}
        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold">KyU STEM</h1>
          <h2 className="text-lg text-gray-600 mt-2">
            Discover, create, and collaborate on different projects
          </h2>
        </div>

        {/* Create Button (Top Right) */}
<Link href="/projects">
  <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center">
    <span className="mr-2">Create</span>➕
  </Button>
</Link>
      </div>

      {/* Tech Projects Section */}
      <h3 className="text-xl font-semibold mt-8">Tech Projects</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {["tech1", "tech2", "tech3", "tech4"].map((proj, index) => (
          <Link href={`/tech/${proj}`} key={index}>
            <Card className="cursor-pointer hover:bg-gray-100 transition">
              <CardContent className="p-4 text-center">
                <Image
                  src={`/images/${proj}.jpg`}
                  alt={`Tech Project ${index + 1}`}
                  width={150}
                  height={100}
                  className="mx-auto rounded-lg"
                />
                <p className="mt-2 font-semibold">Tech Project {index + 1}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Commercial Projects Section */}
      <h3 className="text-xl font-semibold mt-8">Commercial Projects</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {["commercial1", "commercial2", "commercial3", "commercial4"].map((proj, index) => (
          <Link href={`/commercial/${proj}`} key={index}>
            <Card className="cursor-pointer hover:bg-gray-100 transition">
              <CardContent className="p-4 text-center">
                <Image
                  src={`/images/${proj}.jpg`}
                  alt={`Commercial Project ${index + 1}`}
                  width={150}
                  height={100}
                  className="mx-auto rounded-lg"
                />
                <p className="mt-2 font-semibold">Commercial Project {index + 1}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Dropdown Menu */}
      <div className="mt-6 flex justify-center">
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Browse More Fields" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yen">Yen</SelectItem>
            <SelectItem value="shil">Shil</SelectItem>
            <SelectItem value="dolla">Dolla</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
