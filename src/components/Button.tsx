import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps<T extends React.ElementType> {
  as?: T;
}

export default function Button<T extends React.ElementType = "button">({
  as,
  ...props
}: IButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof IButtonProps<T>>) {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-2 rounded bg-[#aa1164] p-[0.875rem] text-white active:bg-[#aa1152] disabled:bg-gray-200 dark:disabled:bg-gray-600",
        props.className,
      )}
    />
  );
}
