import type { Metadata } from "next";

import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://beveragedata.ai"),
  icons: {
    icon: "/owl.svg"
    // apple-touch-icon PNGs can be added in a later pass
  },
  title: {
    default: "Matt Cory",
    template: "%s | Matt Cory"
  },
  description:
    "Principal Architect for AI-enabled enterprise systems — architecture, integration patterns, and operational tooling on Microsoft Dynamics 365 Business Central.",
  openGraph: {
    title: "Matt Cory",
    description:
      "Principal Architect for AI-enabled enterprise systems — architecture, integration patterns, and operational tooling on Microsoft Dynamics 365 Business Central.",
    url: "https://beveragedata.ai",
    siteName: "Matt Cory",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className="site"
          style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
