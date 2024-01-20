import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn
        appearance={{ variables: { colorPrimary: "rgba(170, 17, 100, 1)" } }}
      />
    </div>
  );
}
