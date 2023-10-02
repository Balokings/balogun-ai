"use client"

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
   weight: "600",
   subsets: ["latin"]
})

const LandingNavbar = () => {
   const { isSignedIn } = useAuth()

   return (
      <nav className="p-4 bg-transparent flex items-center justify-between">
         <Link href="/" className="flex items-center">
            <div className="h-8 w-8 relative mr-4">
               <Image 
                  fill
                  alt="logo"
                  src="/balogunai.png"
               />
            </div>
            <h1 className={cn("text-white text-2xl font-bold", font.className)}>
               BalogunAI
            </h1>
         </Link>
         <div className="flex items-center gap-x-2">
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
               <Button variant="outline" className="rounded-lg">
                  Sign Up
               </Button>
            </Link>
         </div>
      </nav>
   )

}
 
export default LandingNavbar;