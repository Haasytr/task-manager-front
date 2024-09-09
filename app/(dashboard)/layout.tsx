import { cookies } from "next/headers";
import { Navbar } from "./_components/navbar";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = cookies().get("user");

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
