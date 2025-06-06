
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
    <button
      className={cn("gold-button", className)}
      data-cal-link="kyle-nix-kixiktechnologies/discovery-call"
      data-cal-namespace="discovery-call"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      {...props}
    >
      {children}
    </button>
  );
};

export default CalButton;
