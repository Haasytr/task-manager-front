"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    await api
      .post("/users", { email, password, name })
      .then(() => {
        toast.success("Conta criada com sucesso!");
        router.push("/sign-in");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar conta");
      });
    setIsSubmitting(false);
  };

  return (
    <div className="p-12 space-y-6 shadow-lg bg-white rounded-md">
      <h1 className="font-bold text-2xl">Sign up</h1>

      <form action={onSubmit} className="space-y-6">
        <Input placeholder="nome" name="name" />

        <Input placeholder="email" name="email" />
        <Input placeholder="senha" name="password" type="password" />
        <Button disabled={isSubmitting} type="submit" className="w-full">
          Criar conta
        </Button>
      </form>

      <Button variant="link" className="w-full">
        <Link className="text-center" href="/sign-in">
          Já tem uma conta?
        </Link>
      </Button>
    </div>
  );
}
