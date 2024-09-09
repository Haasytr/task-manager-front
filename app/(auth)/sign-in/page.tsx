"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/auth";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { authenticate } from "@/actions/authenticate";

export default function SignIn() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { userToken, setUserToken } = useContext(AuthContext);

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await authenticate({ email, password });
      toast.success("Bem vindo!");
      router.push("/board");
    } catch (err) {
      toast.error("Falha ao se autenticar");
    }
  };

  return (
    <div className="p-12 space-y-6 shadow-lg bg-white rounded-md">
      <h1 className="font-bold text-2xl">Sign in</h1>

      <form className="space-y-6" action={onSubmit}>
        <Input placeholder="email" name="email" />
        <Input placeholder="senha" type="password" name="password" />
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>

      <Button variant="link" className="w-full">
        <Link className="text-center text-blue-500" href="/sign-up">
          Não tem uma conta?
        </Link>
      </Button>
    </div>
  );
}
