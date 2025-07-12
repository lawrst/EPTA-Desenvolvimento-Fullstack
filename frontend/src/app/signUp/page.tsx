"use client";
import Image from "next/image";
import Link from "next/link";
import "../globals.scss";

export default function Signup() {
  return (
    <main className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="logo">
            <Image src="/logo.png" alt="Logo EPTA" width={157} height={44} />
          </div>
          <h2 className="subtitle">Crie sua conta</h2>
          <form className="form">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Digite seu nome" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />

            <button type="submit">Cadastrar</button>
          </form>
          <p className="register">
            Já tem uma conta? <Link href="/">Entrar</Link>
          </p>
        </div>

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
