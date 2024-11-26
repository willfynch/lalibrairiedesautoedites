import "./globals.css";
import LayoutClient from "@/components/shared/layout-client/layout-client";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html data-theme="me" lang="en">
      <LayoutClient children={children}/>
      <GoogleAnalytics gaId={process.env.GA_ID ?? "nothing"}/>
    </html>
  );
}
