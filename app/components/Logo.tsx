'use client'
import React from 'react'

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center font-black uppercase tracking-tighter select-none ${className}`}>
      <span className="text-white">Perfect</span>
      <span className="text-primary italic">Body</span>
      <span className="text-primary text-2xl ml-0.5">+</span>
    </div>
  )
}