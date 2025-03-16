import Sidebar from "@/app/app/_components/Sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        {children}
        </div>
    </div>
  );
}
