import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '문디자인스튜디오 | 게임·VR·앱·웹 개발 스튜디오',
  description: '문디자인스튜디오는 게임, VR/XR, 앱, 웹, 인터랙티브 콘텐츠를 기획하고 개발하는 크리에이티브 개발 스튜디오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
