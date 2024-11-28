import { Layout } from '~/components/layout';
import { Pretendard } from '~/styles/fonts';
import '~/styles/global.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Pretendard.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
