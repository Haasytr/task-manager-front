"use server";

import { CardItem } from "./_components/card-item";
import { cookies } from "next/headers";
import { ListContainer } from "./_components/list-container";
import { api } from "@/lib/axios";

export default async function DashboardPage() {
  const user = cookies().get("user");

  const lists = await api.get("/lists/get", {
    headers: {
      Authorization: `Bearer ${user?.value}`,
    },
  });

  return (
    <div className="p-6 mt-[100px]">
      <h1 className="text-2xl">Gerencia suas tarefas</h1>

      <div className="p-4 h-full overflow-y-auto">
        <ListContainer data={lists.data} />
      </div>
    </div>
  );
}
