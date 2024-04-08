import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

// metadata
export const metadata: Metadata = {
  title: "Next Golden Village",
  description: "The best movies on the best framework",
  icons: {
    icon: "/images/common/favicon.png",
  },
};

// common layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
