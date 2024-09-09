import { ElementRef, KeyboardEventHandler, forwardRef, useRef } from "react";
import { Plus, X } from "lucide-react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { createCard } from "@/actions/create-card";
import { Input } from "@/components/ui/input";

interface CardFormProps {
  listId: string;
  enableEditing: () => void;
  disableEditing: () => void;
  isEditing: boolean;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ disableEditing, enableEditing, isEditing, listId }, ref) => {
    const params = useParams();
    const formRef = useRef<ElementRef<"form">>(null);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        disableEditing();
      }
    };

    useOnClickOutside(formRef, disableEditing);
    useEventListener("keydown", onKeyDown);

    const onSubmit = async (formData: FormData) => {
      const title = formData.get("title") as string;
      const listId = formData.get("listId") as string;
      const description = formData.get("description") as string;

      await createCard({ title, listId, description })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    };

    if (isEditing) {
      return (
        <form
          ref={formRef}
          action={onSubmit}
          className="m-1 py-0.5 px-1 space-y-4"
        >
          <Input
            id="title"
            name="title"
            placeholder="Enter a title for this card"
          />
          <Input
            id="title"
            name="description"
            placeholder="Enter a title for this card"
          />

          <input hidden id="listId" name="listId" value={listId} />

          <div className="flex items-center gap-x-1">
            <Button>Add card</Button>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      );
    }

    return (
      <div className="pt-2 px-2">
        <Button
          onClick={enableEditing}
          className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
          size="sm"
          variant="ghost"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add a card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
