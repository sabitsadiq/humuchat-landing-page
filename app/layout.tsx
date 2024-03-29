import "./globals.css";
import localFont from "next/font/local";

const segoe = localFont({ src: "../public/SEGOEUIL.ttf" });

export const metadata = {
  title: "humuchat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={segoe.className}>{children}</body>
    </html>
  );
}
