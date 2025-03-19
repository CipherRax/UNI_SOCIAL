'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Filter } from 'lucide-react';

const categories = [
  { title: 'Academic', content: 'Latest academic updates and announcements.' },
  { title: 'Finance', content: 'Financial aid, fees, and scholarships updates.' },
  { title: 'Sports', content: 'Upcoming sports events and activities.' },
  { title: 'Facilities', content: 'Infrastructure and facility improvements.' }
];

export default function CampusFeed() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filter, setFilter] = useState('Date');

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center">Campus Feed</h1>
      
      {/* Main Card with Four Small Cards */}
      <Card className="p-4 shadow-lg rounded-lg">
        <div className="grid grid-cols-4 gap-2">
          {categories.map((item, index) => (
            <Card
              key={index}
              className={`p-3 text-center cursor-pointer transition-all duration-200 ${
                selectedCategory.title === item.title ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              {item.title}
            </Card>
          ))}
        </div>
      </Card>
      
      {/* Kirinyaga University Academic Department Card */}
      <Card className="p-4 flex justify-between items-center shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold">{selectedCategory.title} Department</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> {filter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {['Date', 'Month', 'Week'].map((item) => (
              <DropdownMenuItem key={item} onClick={() => setFilter(item)}>
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Card>

      {/* Pinned Announcement Section */}
      <Card className="p-4 shadow-lg rounded-lg">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold">📌 Pinned Announcement</h3>
        </div>
        <p className="text-gray-500 text-sm">March 19, 2025</p>
        <h4 className="text-md font-semibold">Unit Registration</h4>
        <p className="text-gray-600">Ensure you have completed your unit registration before the deadline.</p>
      </Card>

      {/* Additional Announcements */}
      <Card className="p-4 shadow-lg rounded-lg space-y-4">
        <h3 className="text-lg font-semibold">Recent Announcements</h3>
        <div>
          <p className="text-gray-500 text-sm">March 18, 2025</p>
          <h4 className="text-md font-semibold">Library Hours Extension</h4>
          <p className="text-gray-600">The library will now be open until midnight for study sessions.</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">March 17, 2025</p>
          <h4 className="text-md font-semibold">New Sports Equipment</h4>
          <p className="text-gray-600">The gym has received new training equipment. Check it out!</p>
        </div>
      </Card>
    </div>
  );
}
