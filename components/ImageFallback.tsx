'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export default function ImageFallback({ className, alt, ...props }: ImageProps) {
  return (
    <div className={cn("relative flex items-center justify-center", props.fill ? "w-full h-full absolute inset-0" : "", className)}>
      <Image
        {...props}
        alt={alt || ""}
        referrerPolicy="no-referrer"
        className={cn(
            'z-10 w-full h-full object-cover',
            props.fill ? "absolute" : "",
            className
        )}
      />
    </div>
  );
}
