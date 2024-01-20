import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-[#aa1164] ">
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        <Image
          src={"/logo.png"}
          height={200}
          width={200}
          alt="cherry chat logo"
        />
        <span>
          <h1 className="text-primary mb-1 text-5xl font-extrabold md:text-6xl">
            Cherry Chat
          </h1>
          <p className="mb-10">Пепси чери легенда</p>
        </span>
      </div>
      <Button as={Link} href="/chat">
        Start chatting
      </Button>
    </div>
  );
}
