import { Pretendard } from '~/styles/fonts';
import '~/styles/global.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Pretendard.className}>{children}</body>
    </html>
  );
}
