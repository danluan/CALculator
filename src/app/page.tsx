"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  if (!session) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome, {session.user?.name}!</h1>
    </div>
  );
}
