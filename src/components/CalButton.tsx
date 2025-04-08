
import React from 'react';
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface CalButtonProps extends ButtonProps {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
}

const CalButton = ({ className, children, size = "default", ...props }: CalButtonProps) => {
  return (
    <Button
      className={cn("gold-button", className)}
      data-cal-link="kyle-nix-kixiktechnologies/30min"
      data-cal-namespace="30min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CalButton;
