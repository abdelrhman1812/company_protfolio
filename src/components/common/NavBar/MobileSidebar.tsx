"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationMobile } from "@/data/mock-navMobile";
import { NavItemType } from "@/lib/types";
import { ChevronDown, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo/Logo";

// items
function NavItem({
  item,
  onClose,
}: {
  item: NavItemType;
  onClose: () => void;
}) {
  return (
    <div className="border-b z-50 border-gray-200">
      {item.children ? (
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-4 text-lg font-medium">
            <Link
              href={item.href}
              className="text-secondary hover:text-primary transition duration-200 block  text-lg font-medium "
            >
              {item.title}
            </Link>
            <ChevronDown className="h-8 w-8 rounded bg-primary text-white" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 pb-4">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-destructive"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className="text-secondary hover:text-primary transition duration-200 block py-4 text-lg font-medium "
        >
          {item.title}
        </Link>
      )}
    </div>
  );
}

// sidebar

const MobileSidebar = () => {
  const t = useTranslations("");
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>☰
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs p-0">
        <SheetHeader className="border-b border-gray-200 bg-foreground p-4">
          <div className="flex items-center justify-between">
            <Logo />
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white rounded-full "
              >
                <X className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
          </div>
        </SheetHeader>
        <div className="space-y-0 px-4 pt-5">
          {navigationMobile(t).map((item) => (
            <NavItem key={item.href} item={item} onClose={closeSidebar} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
