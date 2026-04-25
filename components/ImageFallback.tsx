'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export default function ImageFallback({ className, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden flex items-center justify-center", props.fill ? "w-full h-full absolute inset-0" : "", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#001a38]/10 dark:bg-[#FAF9F6]/5 animate-pulse z-0 flex items-center justify-center backdrop-blur-md">
           <Loader2 className="w-6 h-6 text-[#C5A059] animate-spin opacity-70" />
        </div>
      )}
      <Image
        {...props}
        alt={alt || ""}
        referrerPolicy="no-referrer"
        className={cn(
            'transition-all duration-700 ease-in-out z-10 w-full h-full',
            props.fill ? "object-cover absolute" : "",
            className
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
