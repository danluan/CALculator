"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { AiOutlineLoading } from "react-icons/ai";
import Button from "@/components/ui/Button";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/auth/login");
    }
  }, [session, status, router]);

  if (status === "loading") return (
    <div className="flex h-screen justify-center items-center">
      <AiOutlineLoading className="animate-spin h-10 w-10" />
    </div>
  );

  if (!session) return null;

  return (
    <div className="flex h-screen">
      <div>
        <h1>Welcome, {session.user?.name}!</h1>
      </div>
    </div>
  );
}