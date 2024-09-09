"use server";

import { api } from "@/lib/axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface CreateListProps {
  title: string;
  description: string;
  listId: string;
}

export async function createCard({
  title,
  description,
  listId,
}: CreateListProps) {
  const user = cookies().get("user");

  try {
    const card = await api.post(
      "/cards/create",
      { title, description, listId },
      {
        headers: {
          Authorization: `Bearer ${user?.value}`,
        },
      }
    );

    return card;
  } catch (err) {
    console.log(err);
  }
}
