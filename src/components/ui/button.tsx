import { cn } from "@/lib/utils"
import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn("px-4 py-2 bg-blue-500 text-white rounded", className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
