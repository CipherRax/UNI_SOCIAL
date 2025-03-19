'use client';

import Link from 'next/link';
import { Home, Search, PlusCircle, MessageCircle, User } from 'lucide-react';

export default function BottomNavbar() {
  return (
    <nav className="bg-white shadow-lg border-t border-gray-200 z-10">
      {/* Desktop Bottom Navbar */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 w-full justify-between items-center px-6 py-3 bg-white shadow-md">
        <NavItem href="/" icon={<Home size={28} />} label="Home" />
        <NavItem href="/search" icon={<Search size={28} />} label="Search" />
        <NavItem href="/add" icon={<PlusCircle size={28} />} label="Add" />
        <NavItem href="/messages" icon={<MessageCircle size={28} />} label="Messages" />
        <NavItem href="/profile" icon={<User size={28} />} label="Profile" />
      </div>

      {/* Mobile Bottom Navbar (Fixed & Non-Moving) */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden">
        <div className="flex justify-between items-center max-w-sm mx-auto px-2 py-2">
          <NavLink href="/" icon={<Home size={22} />} />
          <NavLink href="/search" icon={<Search size={22} />} />
          <NavLink href="/add" icon={<PlusCircle size={26} />} />
          <NavLink href="/messages" icon={<MessageCircle size={22} />} />
          <NavLink href="/profile" icon={<User size={22} />} />
        </div>
      </div>
    </nav>
  );
}

// Reusable Nav Item for Desktop
function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-green-500 transition-all duration-300"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}

// Reusable Nav Link for Mobile (Icon Only)
function NavLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-green-500 p-2">
      {icon}
    </Link>
  );
}
