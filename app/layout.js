import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-green-300 py-3">
          <ul className="flex gap-2 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/parallel-dashboard">parallel-dashboard</Link>
            </li> 
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
