import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"




export const Portal = ({ children, id }: { children: ReactNode, id: string }) => {
   const [mounted, setMounted] = useState(false)
   const [element, setElemet] = useState<any>();

   useEffect(() => {
      setMounted(true)
      setElemet(document.getElementById(id))

      return () => setMounted(false)
   }, [])

   if (element == null || !mounted) return null;
   return createPortal(children, element)

}



