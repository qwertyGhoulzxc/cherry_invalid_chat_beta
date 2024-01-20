import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp
        appearance={{ variables: { colorPrimary: "rgba(170, 17, 100, 1)" } }}
      />
    </div>
  );
}
