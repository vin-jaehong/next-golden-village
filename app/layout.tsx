import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

// ** 메타데이터 (템플릿 지정)
export const metadata: Metadata = {
  title: {
    template: "%s | Next Golden Village",
    default: "Loading...",
  },
  description: "The best movies on the best framework",
  icons: {
    icon: "/images/common/favicon.png",
  },
};

// ** 레이아웃 컴포넌트 (children 이 페이지)
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
