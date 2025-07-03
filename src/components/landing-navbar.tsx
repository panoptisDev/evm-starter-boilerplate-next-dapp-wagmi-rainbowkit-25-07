"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/wed/button";
import Image from "next/image";
import { Menu, Home, Settings, Info, Users } from "lucide-react";
import { ToggleLanguage } from "@/components/toggle-language";

export const LandingNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black border-b border-gray-700 shadow-lg">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/panoptis256purple.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
        />
      </Link>

      {/* Navigation Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          href="/dapp"
          className="text-white hover:text-gray-300 transition-colors font-medium"
        >
          DApp
        </Link>
        
        {/* Dropdown Menu for More Options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-300 hover:bg-gray-800">
              More
              <Menu className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/about" className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/community" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Community
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-300 hover:bg-gray-800">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dapp" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                DApp
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/about" className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/community" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Community
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Language Toggle and Enter DApp Button */}
      <div className="flex items-center space-x-4">
        <ToggleLanguage />
        <Link href="/dapp">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Enter DApp
          </Button>
        </Link>
      </div>
    </nav>
  );
};
