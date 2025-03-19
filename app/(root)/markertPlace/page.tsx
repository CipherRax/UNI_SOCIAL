'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function KyUMarketplace() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">KyU Marketplace</h1>
        <Link href="/store">
  <Image 
    src="/avatars/store.jpeg" 
    alt="Profile" 
    width={100} 
    height={90} 
    className="rounded-full cursor-pointer"
  />
</Link>

      </div>

      {/* Search Box */}
      <div className="flex justify-center">
        <Input className="w-full max-w-xl p-3 text-lg" placeholder="Search for products and services" />
      </div>

      {/* Hero Section */}
      <Card className="relative w-full h-80 flex justify-center items-center bg-gray-100">
        {/* Multiple Images */}
        <div className="flex gap-2 overflow-hidden">
          <Image src="/avatars/funiture.jpeg" alt="Product 1" width={250} height={250} className="rounded-md" />
          <Image src="/avatars/electronic1.jpeg" alt="Product 2" width={250} height={250} className="rounded-md" />
          <Image src="/avatars/clouths1.jpeg" alt="Product 3" width={250} height={250} className="rounded-md" />
        </div>
      </Card>

      {/* Profile Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/avatars/delivery.jpg" alt="Fast & Reliable" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">Fast & Reliable</p>
            <p className="text-gray-500 text-sm">Same day delivery</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/avatars/comrade.jpeg" alt="Comrade Product" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <p className="text-lg font-semibold">Comrade Product</p>
        </div>
      </div>

      {/* Browse by Category */}
      <div>
        <h2 className="text-xl font-semibold">Browse by Category</h2>
        <p className="text-gray-500 text-sm">Items</p>
        <div className="grid grid-cols-3 gap-4 mt-3">
          {[
            { title: 'Shoes', image: '/avatars/shoe3.jpeg' },
            { title: 'Clothes', image: '/avatars/clouths1.jpeg' },
            { title: 'Electronics', image: '/avatars/electronic1.jpeg' },
          ].map((item, index) => (
            <Card key={index} className="p-4 flex flex-col items-center">
              <Image src={item.image} alt={item.title} width={100} height={100} className="rounded-md object-cover w-full h-32" />
              <p className="mt-2 font-medium">{item.title}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-xl font-semibold">Services</h2>
        <div className="grid grid-cols-3 gap-4 mt-3">
          {[
            { title: 'Cyber Services', image: '/avatars/tech5.jpeg' },
            { title: 'Branding', image: '/avatars/braid1.jpeg' },
            { title: 'Laundry', image: '/avatars/laoudry1.jpeg' },
          ].map((service, index) => (
            <Card key={index} className="p-4 flex flex-col items-center">
              <Image src={service.image} alt={service.title} width={100} height={100} className="rounded-md object-cover w-full h-32" />
              <p className="mt-2 font-medium">{service.title}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Sell Button */}
      <div className="flex justify-center mt-6">
        <Link href="/sell">
          <Button className="px-6 py-3 text-lg font-semibold transition-colors hover:bg-green-500">Sell</Button>
        </Link>
      </div>
    </div>
  );
}