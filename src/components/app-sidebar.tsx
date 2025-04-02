"use client"

import { Home, User, LogOut, Flame, ChartNoAxesColumnIncreasing } from "lucide-react"
import { signOut } from "next-auth/react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "/app",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/app/profile",
    icon: User,
  },
  {
    title: "Metrics",
    url: "/app/metrics",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Calories",
    url: "/app/metrics",
    icon: Flame,
  },
]

export function AppSidebar() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/login" });
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleSignOut}>
                  <LogOut />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
