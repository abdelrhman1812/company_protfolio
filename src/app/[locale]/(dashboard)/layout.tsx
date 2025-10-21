"use client";

import HeaderDashboard from "@/components/app/dashboard/HeaderDashboard";
import { AppSidebar } from "@/components/app/dashboard/SideBarDashBoard";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderDashboard />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
