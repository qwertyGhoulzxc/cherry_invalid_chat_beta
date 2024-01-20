import { ComponentPropsWithoutRef } from "react";
import { LoadingIndicator } from "stream-chat-react";
import Button from "./Button";

interface ILoadingButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading: boolean;
}

export default function LoadingButton({
  loading,
  ...props
}: ILoadingButtonProps) {
  return (
    <Button {...props} disabled={loading}>
      {loading ? <LoadingIndicator /> : props.children}
    </Button>
  );
}
