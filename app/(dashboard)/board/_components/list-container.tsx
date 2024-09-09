import { ListForm } from "./list-form";
import { ListItem } from "./list-item";

interface ListContainerProps {
  data: {
    id: string;
    title: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    cards: {
      id: string;
      title: string;
      description: string;
      finished: boolean;
      listId: string;
      createdAt: Date;
      updatedAt: Date;
    }[];
  }[];
}

export function ListContainer({ data }: ListContainerProps) {
  return (
    <ol className="flex gap-x-3 h-full">
      {data.map((list, index) => {
        return <ListItem key={list.id} data={list} />;
      })}

      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}
