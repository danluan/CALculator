'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputText from "@/components/ui/InputText";
import {Button} from '@/components/ui/button'

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      alert("Usuário registrado! Agora faça login.");
      router.push("/auth/login");
    } else {
      const errorData = await res.json();
      alert("Erro: " + errorData.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleRegister}
        className="w-1/2 max-w-200 flex flex-col space-y-4 bg-amber-50 p-10 rounded-lg">
        <h1 className="text-2xl text-center">Register page</h1>
        <InputText
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputText
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputText
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex justify-center gap-10 w-full items-center">
          <Button type="submit">Register</Button>
          <Button onClick={() => router.push("/auth/login")}>Back to Log in</Button>
        </div>
      </form>
    </div>
  );
}
