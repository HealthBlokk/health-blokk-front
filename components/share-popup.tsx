'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Facebook, Linkedin, Mail, ShareIcon, X } from 'lucide-react';
import { useState } from 'react';
import QRCode from 'react-qr-code';

interface SharePopupProps {
  url: string;
  title: string;
  iconClassName?: string;
}

export default function SharePopup({
  url,
  title,
  iconClassName = 'h-5 w-5',
}: SharePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}&t=${encodeURIComponent(title)}`,
    },
    {
      name: 'X / Twitter',
      icon: <X className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    },
    {
      name: 'Email',
      icon: <Mail className="h-4 w-4" />,
      url: `mailto:?subject=${encodeURIComponent(
        title
      )}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 text-white cursor-pointer"
        >
          <ShareIcon className={iconClassName} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <h3 className="font-medium">Share this page</h3>

          <div className="flex justify-between">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:text-primary"
              >
                <div className="rounded-full bg-muted p-2">{link.icon}</div>
                <span className="text-xs">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">QR Code</h4>
            <div className="flex justify-center">
              <div className="bg-white p-2 rounded-lg">
                <QRCode value={url} size={120} />
              </div>
            </div>
            <p className="mt-2 text-xs text-center text-muted-foreground">
              Scan to open on another device
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
