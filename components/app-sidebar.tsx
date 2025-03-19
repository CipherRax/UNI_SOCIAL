'use client'

import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import { usePathname } from 'next/navigation'; // Import usePathname
import Link from 'next/link'; 

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "My Class",
      url: "MyClass",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Varcity voices",
      url: "vacity",
      items: [
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "Suggestion box",
      url: "suggestionB",
      items: [
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Food for thought",
      url: "foodForT",
      items: [
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "STEM",
      url: "stem",
      items: [
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "About KYU",
      url: "about",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname(); // Use usePathname from next/navigation

  // Function to check if an item is active
  const isActive = (url: string) => pathname === url; // Compare pathname with item.url

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Darshboard</span>
                  <span className="">kyu uni-social</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => {
              const active = isActive(item.url); // Check if the current item is active

              return (
                <SidebarMenuItem key={item.title} className="mb-4"> {/* Add margin bottom */}
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span className={`font-medium ${active ? 'text-blue-500' : ''}`}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>

                  {/* Render subitems only if the parent item is active */}
                  {active && item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => {
                        const subItemActive = isActive(subItem.url);
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                <span className={subItemActive ? 'text-blue-500' : ''}>
                                  {subItem.title}
                                </span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

