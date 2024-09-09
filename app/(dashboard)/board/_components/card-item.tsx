"use client";

// import { useCardModal } from "@/hooks/use-card-module";
import { Draggable } from "@hello-pangea/dnd";
// import { Card } from "@prisma/client";

// interface CardItemProps {
//   data: Card;
//   index: number;
// }

export function CardItem() {
  // const cardModal = useCardModal();

  return (
    <div
      role="button"
      // onClick={() => cardModal.onOpen(data.id)}
      className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
    >
      titulo
    </div>
  );
}
