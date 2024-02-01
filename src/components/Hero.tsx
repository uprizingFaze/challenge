import React from 'react'
import { } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { CalendarDays } from "lucide-react"
import { Separator } from "@/components/ui/separator"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

function Hero() {
    return (
        <div >
            <Navbar />
            <div className="flex flex-col items-center" style={{minHeight: '70vh'}}>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="link" className='font-serif'>@uprizingFaze</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <Avatar>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/111722885?v=4" />
                                <AvatarFallback>UPR</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">@uprizing</h4>
                                <p className="text-sm">
                                    Next.js 14 – created and maintained by @uprizngFaze.
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                    <span className="text-xs text-muted-foreground">
                                        Joined December 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>

                <h1 className="mx-4 mt-10 scroll-m-20 pb-2 text-5xl font-serif leading-relaxed tracking-tight transition-colors first:mt-0 text-center md:text-center sm:text-center">
                    The Ultimate Design System for <br /> Modern Web Encription
                </h1>
                <div className="flex space-x-2">
                    <Button className=' bg-indigo-600 hover:bg-blue-700'>Button</Button>
                    <Button variant="outline">Button 2</Button>
                </div>
            
            </div>
        </div>
    )
}

export default Hero