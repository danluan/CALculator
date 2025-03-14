'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import InputText from "@/components/ui/InputText";
import Button from "@/components/ui/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
    
        if (res?.error) {
          alert("Erro ao fazer login: " + res.error);
        } else {
          router.push("/app");
        }
      }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit}
                className="w-1/2 max-w-200 flex flex-col space-y-4 bg-amber-50 p-10 rounded-lg">
                <h1 className="text-2xl text-center">Login page</h1>
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
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button type="button" onClick={() => router.push("/auth/register")}>
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>
    );
}