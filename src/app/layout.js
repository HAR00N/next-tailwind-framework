import "./css/globals.css";
import { AlertProvider } from "@/context/AlertContext";

export const metadata = {
  title: "Next Tailwind",
  description: "Next Tailwind System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <AlertProvider>{children}</AlertProvider>
      </body>
    </html>
  );
}
