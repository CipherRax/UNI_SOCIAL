import React from 'react';
import Link from 'next/link';
import { Menubar, MenubarTrigger, MenubarMenu } from "@/components/ui/menubar";

function MyMenu() {
  return (
    <div className="flex space-x-4">
      <Menubar className="mr-36">
        <MenubarMenu>
          <Link href="/feed" className="w-full">
            <MenubarTrigger>Campus Feed</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>

      <Menubar className="mr-36">
        <MenubarMenu>
          <Link href="/notification" className="w-full">
            <MenubarTrigger>NoticeBoard</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>

      <Menubar className="mr-39">
        <MenubarMenu>
          <Link href="/markertPlace" className="w-full">
            <MenubarTrigger>Marketplace</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>

      <Menubar>
        <MenubarMenu>
          <Link href="/community" className="w-full">
            <MenubarTrigger>Community</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default MyMenu;
