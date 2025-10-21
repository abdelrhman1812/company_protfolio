"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, User } from "lucide-react";

const HeaderDashboard = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center">
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="ml-2 md:hidden">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar </span>
          </Button>
        </SidebarTrigger>
        <Input
          type="search"
          placeholder="Search..."
          className="max-w-sm ml-4"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HeaderDashboard;
