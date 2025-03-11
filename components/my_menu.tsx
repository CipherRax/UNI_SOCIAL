import React from 'react'
import Link from 'next/link'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

function MyMenu() {
  return (
    <div className="flex space-x-4"> {/* Use flex to align horizontally and space-x for horizontal spacing */}
      <Menubar className="mr-36">
        <MenubarMenu>
          <MenubarTrigger>Compus Feed</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/feed" className="w-full">
                Go to page <MenubarShortcut>⌘CF</MenubarShortcut>
              </Link>
            </MenubarItem>
            {/* <MenubarItem>
              <Link href="/new-window" className="w-full">New Window</Link>
            </MenubarItem> */}
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/share" className="w-full">Share</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/print" className="w-full">Print</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Menubar className="mr-36">
        <MenubarMenu>
          <MenubarTrigger>NoticeBoard</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/notification" className="w-full">
                See all <MenubarShortcut>⌘N</MenubarShortcut>
              </Link>
            </MenubarItem>
            {/* <MenubarItem>
              <Link href="/new-window" className="w-full">New Window</Link>
            </MenubarItem> */}
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/share" className="w-full">Share</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/print" className="w-full">Print</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Menubar className="mr-39">
        <MenubarMenu>
          <MenubarTrigger>Marketplace</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/markertPlace" className="w-full">
                Go to main page <MenubarShortcut>⌘M</MenubarShortcut>
              </Link>
            </MenubarItem>
            {/* <MenubarItem>
              <Link href="/new-window" className="w-full">New Window</Link>
            </MenubarItem> */}
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/share" className="w-full">Share</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/print" className="w-full">Print</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Community</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/community" className="w-full">
                Go to main page <MenubarShortcut>⌘C</MenubarShortcut>
              </Link>
            </MenubarItem>
            {/* <MenubarItem>
              <Link href="/new-window" className="w-full">New Window</Link>
            </MenubarItem> */}
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/share" className="w-full">Share</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/print" className="w-full">Print</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export default MyMenu;
