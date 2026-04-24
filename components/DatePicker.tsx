'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';
import "react-day-picker/style.css";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  label: string;
}

export function DatePicker({ date, setDate, label }: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={popoverRef}>
      <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-left",
          !date && "text-gray-400"
        )}
      >
        <span className="text-[#002349] font-medium">{date ? format(date, "PPP") : "Select date"}</span>
        <CalendarIcon className="h-4 w-4 text-[#C5A059]" />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full mt-2 left-0 z-50 bg-white border border-gray-100 shadow-xl p-2 sm:p-4"
          style={{
            ["--rdp-accent-color" as any]: "#002349",
            ["--rdp-background-color" as any]: "#f4f4f5",
            ["--rdp-accent-color-dark" as any]: "#002349",
            ["--rdp-background-color-dark" as any]: "#18181b",
            ["--rdp-outline" as any]: "2px solid #C5A059",
            ["--rdp-outline-selected" as any]: "2px solid #002349"
          }}
        >
          <DayPicker
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
