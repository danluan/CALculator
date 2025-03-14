'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
            <h1>Login page</h1>

            <form onSubmit={handleSubmit}
                className="flex flex-col space-y-4">
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />

                <input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />

                <button type="submit">
                    Sign In
                </button>
                <button type="button" onClick={() => router.push("/auth/register")}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}