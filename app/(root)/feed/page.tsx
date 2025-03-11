"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function KyUCommunicationFeeds() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold">KyU Communication Feeds</h1>
      <h2 className="text-lg text-gray-600 mt-2">
        Select a department and view news in real time
      </h2>

      {/* News Feed Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Clickable Card 1 */}
        <Link href="/news/department-updates">
          <Card className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition">
            <Image src="/images/news1.jpg" alt="News 1" width={500} height={300} className="w-full h-48 object-cover"/>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Department Update</h3>
              <p className="text-sm text-gray-600">Latest news and insights...</p>
            </CardContent>
          </Card>
        </Link>

        {/* Clickable Card 2 */}
        <Link href="/news/event-highlights">
          <Card className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition">
            <Image src="/images/news2.jpg" alt="News 2" width={500} height={300} className="w-full h-48 object-cover"/>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Event Highlights</h3>
              <p className="text-sm text-gray-600">Recent campus events...</p>
            </CardContent>
          </Card>
        </Link>

        {/* Clickable Card 3 */}
        <Link href="/news/student-activities">
          <Card className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition">
            <Image src="/images/news3.jpg" alt="News 3" width={500} height={300} className="w-full h-48 object-cover"/>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Student Activities</h3>
              <p className="text-sm text-gray-600">Clubs and societies news...</p>
            </CardContent>
          </Card>
        </Link>

        {/* Clickable Card 4 */}
        <Link href="/news/research-innovation">
          <Card className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition">
            <Image src="/images/news4.jpg" alt="News 4" width={500} height={300} className="w-full h-48 object-cover"/>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Research & Innovation</h3>
              <p className="text-sm text-gray-600">Latest research updates...</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* View More Dropdown */}
      <div className="mt-8">
        <Select>
          <SelectTrigger className="w-48 mx-auto">
            <SelectValue placeholder="View more" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yen">Yen</SelectItem>
            <SelectItem value="shilg">Shilg</SelectItem>
            <SelectItem value="doller">Doller</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
