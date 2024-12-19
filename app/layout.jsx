import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import TabRoom from "./components/TabRoom";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pantip Airbnb Design",
  description: "Clone Pantip with Airbnb Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
         <div className=" z-50 sm:sticky sm:top-0">
          <Navbar />
           <TabRoom />
        </div>

        {children}
      </body>
    </html>
  );
}
