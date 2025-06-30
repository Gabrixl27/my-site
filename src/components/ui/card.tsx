// src/components/ui/card.tsx
import * as React from "react"

export function Card({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-lg border p-4 shadow ${className}`}>{children}</div>
}

export function CardHeader({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="mb-4">{children}</div>
}

export function CardTitle({ children }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="text-xl font-bold">{children}</h2>
}

export function CardDescription({ children }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="text-sm text-gray-500">{children}</p>
}

export function CardContent({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div>{children}</div>
}
