"use server";

import { api } from "@/lib/axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface CreateListProps {
  title: string;
}

export async function createList({ title }: CreateListProps) {
  const user = cookies().get("user");

  try {
    const list = await api.post(
      "/lists/create",
      { title },
      {
        headers: {
          Authorization: `Bearer ${user?.value}`,
        },
      }
    );

    revalidatePath("/board");
    return list;
  } catch (err) {
    console.log(err);
  }
}
