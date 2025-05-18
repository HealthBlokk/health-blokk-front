"use client"

import { useState } from "react"
import QRCode from "react-qr-code"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { QrCode } from "lucide-react"

interface QRCodeDisplayProps {
  url: string
  restaurantName: string
}

export default function QRCodeDisplay({ url, restaurantName }: QRCodeDisplayProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <QrCode className="h-4 w-4" />
          View QR Code
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>QR Code for {restaurantName}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-6">
          <div className="bg-white p-4 rounded-lg">
            <QRCode value={url} size={200} />
          </div>
          <p className="mt-4 text-sm text-center text-muted-foreground">Scan this code to access the menu directly</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
