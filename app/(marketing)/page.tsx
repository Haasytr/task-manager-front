import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col")}>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Tasky te ajuda a gerenciar melhor suas tarefas
        </h1>
        <div
          className="text-3xl md:text-6xl bg-gradient-to-r 
                from-fuchsia-600 to-pink-600 text-white px-4 p-2 
                rounded-md pb-4 w-fit"
        >
          Seja diferente
        </div>
      </div>
      <div
        className={cn(
          "text-sm:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        )}
      >
        Simplifique sua rotina com o Tasky: o gerenciador de tarefas online que
        organiza seu dia de forma prática e eficiente. Aumente sua produtividade
        agora!
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Crie uma conta</Link>
      </Button>
    </div>
  );
}
