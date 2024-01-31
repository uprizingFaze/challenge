"use client"
import { useState } from 'react';
import { ModeToggle } from "@/components/items/darkmode";
import { NavigationMenuDemo } from "@/components/items/itemsnav";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { HoverCardDemo } from "@/components/ui/hovercard-demo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/111722885?v=4" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className=" text-2xl font-semibold tracking-tight">
            uprizing
          </h3>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenuDemo></NavigationMenuDemo>
          <HoverCardDemo></HoverCardDemo>
          <ModeToggle></ModeToggle>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavigationMenuDemo></NavigationMenuDemo>
        </div>
      )}
    </nav>
  );
}