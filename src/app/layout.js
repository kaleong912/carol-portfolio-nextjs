import { Poppins } from "next/font/google";
import "./globals.css";
import "./main.css";

const inter = Poppins({
  weight: ['400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Carol Portfolio",
  description: "Carol Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
