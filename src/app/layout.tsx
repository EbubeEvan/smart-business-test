import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import { Heading } from "@/components/layout/Heading";

const ReduxProvider = dynamic(() => import("@/lib/store/redux-provider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Task",
  description: "Smart Business Junior Developer Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <Heading />
            {children}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
