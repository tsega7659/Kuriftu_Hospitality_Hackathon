import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicClientProviders from "@/components/DynamicClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kuriftu Resorts - Membership & Loyalty Program",
  description: "Enhance your experience with Kuriftu Resort and Spa's Membership & Loyalty Program",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicClientProviders>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </DynamicClientProviders>
      </body>
    </html>
  );
}