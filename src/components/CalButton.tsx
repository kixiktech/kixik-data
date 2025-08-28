
import React from 'react';
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface CalButtonProps extends ButtonProps {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
}

const CalButton = ({ className, children, size = "default", ...props }: CalButtonProps) => {
  const handleClick = () => {
    window.open("https://kixikonboarding.fillout.com/t/aky41kbvN1us", "_blank");
  };

  return (
    <button
      className={cn("gold-button cursor-pointer", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CalButton;
