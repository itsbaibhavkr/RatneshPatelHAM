import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] overflow-x-clip w-full">
      <Header />
      <main className="flex-1 w-full overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
