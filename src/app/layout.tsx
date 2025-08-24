import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata = {
  title: "Rushil | Portfolio",
  description: "Aspiring Software Engineer | AI • Cloud • Security",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}