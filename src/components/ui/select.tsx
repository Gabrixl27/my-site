import * as React from "react";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => {
    return <select ref={ref} className={className} {...props} />;
  }
);
Select.displayName = "Select";