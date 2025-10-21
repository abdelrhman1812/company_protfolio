"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { CodeXml, HandPlatter, Home, Images, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: HandPlatter, label: "admin-services", href: "/admin-services" },
  { icon: CodeXml, label: "admin-projects", href: "/admin-projects" },
  { icon: Images, label: "admin-slider", href: "/admin-slider" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-l">
      <SidebarHeader className="flex items-center justify-between px-4 py-2">
        <Link href="/dashboard" className="flex items-center">
          <span className="text-xl font-bold">Control Penal</span>
        </Link>
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-1 p-2">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href &&
                      "bg-primary text-white font-semibold"
                  )}
                >
                  <item.icon className="ml-2 h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-sm text-muted-foreground">
          <p>© 2023 Company</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
