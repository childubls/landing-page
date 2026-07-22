import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "차일드유 범어점 | 초등·중등 영어교육",
  description:
    "우리 아이에게 맞는 영어 시작점을 찾고, 미국 교과서와 영어 원서로 초등 기초부터 중등 준비까지 연결합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
