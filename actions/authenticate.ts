"use server";

import { api } from "@/lib/axios";
import { cookies } from "next/headers";

interface AuthenticateProps {
  email: string;
  password: string;
}

export async function authenticate({ email, password }: AuthenticateProps) {
  await api
    .post("/sessions", { email, password })
    .then((response) => {
      cookies().set("user", response.data.token, { maxAge: 60 * 60 * 24 * 7 });
    })
    .catch((err) => {
      return err;
    });
}
