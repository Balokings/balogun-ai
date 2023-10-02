"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
   useEffect(() => {
      Crisp.configure("4b6b9143-d74a-4816-87ef-fd4437374383");
   }, [])

   return null;
}