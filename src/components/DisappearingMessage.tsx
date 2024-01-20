import { useEffect, useState } from "react";

interface IDisappearingMessageProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function DisappearingMessage({
  children,
  className,
  duration = 5000,
}: IDisappearingMessageProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <div
      className={`${visible ? "opacity-100" : "opacity-0"} w-max transition-opacity duration-500 ${className}`}
    >
      {children}
    </div>
  );
}
