import LayoutClient from "@/components/shared/LayoutClient";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html data-theme="me" lang="fr">
      <LayoutClient>{children}</LayoutClient>
      <GoogleAnalytics gaId={process.env.GA_ID ?? "nothing"}/>
    </html>
  );
}
