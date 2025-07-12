//PÁGINA DE LOGIN

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./globals.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login.");
      }

      alert("Login realizado com sucesso!");
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Erro:", error.message);
      alert("Erro no login: " + error.message);
    }
  };

  return (
    <main className="login-container">
      <div className="login-card">
        {/* Lado esquerdo */}
        <div className="login-left">
          <div className="logo">
            <Image src="/logo.png" alt="Logo EPTA" width={157} height={44} />
          </div>
          <h2 className="subtitle">Bem-vindo de volta! Insira seus dados.</h2>
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Entrar</button>
          </form>
          <p className="register">
            Não tem uma conta? <a href="/signUp">Cadastre-se gratuitamente!</a>
          </p>
        </div>

        {/* Lado direito */}
        <div className="login-right">
          <Image
            src="/placeholder.png"
            alt="Imagem decorativa"
            width={150}
            height={150}
          />
        </div>
      </div>
    </main>
  );
}
