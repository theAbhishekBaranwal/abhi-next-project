import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sample Project",
  description: "abcd",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  // const res= await fetch('https://api.restful-api.dev/objects/3')
  // const data = await res.json()

  return (
    <html lang="en">
      <body className={inter.className} className="mx-5 ">
        {/* <h1>{data.name}</h1> */}
        {children}</body>
    </html>
  );
}
