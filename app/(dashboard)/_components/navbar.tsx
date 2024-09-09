import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <div
      className="fixed top-0 w-full h-14 px-4 border-b 
        shadow-sm bg-white flex items-center"
    >
      <div
        className="md:max-w-screen-2xl mx-auto flex
            items-center w-full justify-between"
      >
        <h1>Dashboard</h1>
        <div
          className="space-x-4 md:block md:w-auto flex items-center
                justify-between w-full"
        >
          <span>Vínicius</span>
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Log out</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
