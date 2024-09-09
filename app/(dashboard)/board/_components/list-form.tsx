"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

import { ListWrapper } from "./list-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createList } from "@/actions/create-list";

export function ListForm() {
  const router = useRouter();

  const inputRef = useRef<ElementRef<"input">>(null);
  const formRef = useRef<ElementRef<"form">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      disableEditing();
    }
  };

  useEventListener("keydown", onKeyDown);

  useOnClickOutside(formRef, disableEditing);

  const onSubmit = async (formData: FormData) => {
    const title = formData.get("title") as string;

    await createList({ title })
      .then((response) => {
        toast.success(`lista '${response}' criada com sucesso`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isEditing) {
    return (
      <ListWrapper>
        <form
          action={onSubmit}
          ref={formRef}
          className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <Input
            ref={inputRef}
            name="title"
            placeholder="Coloque o titulo da lista"
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
          />
          <div className="flex items-center justify-between gap-x-1">
            <Button type="submit" size="sm">
              Adicionar lista
            </Button>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <X className="H-5 W-5 " />
            </Button>
          </div>
        </form>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <button
        onClick={enableEditing}
        className="w-full rounded-md bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-sm"
      >
        <Plus className="h-4 w-4 mr-2" />
        Adicionar uma lista
      </button>
    </ListWrapper>
  );
}
