import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginPage() {
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
          router.push("/"); // Redireciona após login bem-sucedido
        }
      }

    return (
        <>
            <h1>Login page</h1>

            <form onSubmit={handleSubmit}>
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
                    Log In
                </button>
            </form>
        </>
    );
}