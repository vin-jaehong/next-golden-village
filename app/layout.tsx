import { Metadata } from "next";
import Navigation from "../components/navigation";

// ** 메타데이터 (템플릿 지정)
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "The best movies on the best framework",
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
        // ** 이 부분에 페이지 컴포넌트가 들어감
        {children}
      </body>
    </html>
  );
}
