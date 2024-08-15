import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'MyU',
  description: 'my utility application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='app-container'>
          <section className='app-title'>Foodie</section>
          {children}
        </div>
      </body>
    </html>
  );
}
