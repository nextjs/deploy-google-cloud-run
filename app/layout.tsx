import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on Google Cloud Run',
  description: 'Deploy your Next.js application to Google Cloud Run',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
