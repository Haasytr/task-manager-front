import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = cookies().get("user");

  if (user) {
    redirect("/board");
  }
  return (
    <div className="h-full bg-gray-800/10 flex flex-col items-center justify-center space-y-6">
      {children}
    </div>
  );
}
