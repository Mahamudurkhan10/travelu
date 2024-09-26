
import Navbar from "@/Components/shared/Navbar";
import "./globals.css";



export const metadata = {
  title: "Travelu",
  description: "Travelu.. choice your destination",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" >

      <body
        className={`  antialiased `}
      >
        <div className="">
          <Navbar></Navbar>
        </div>
        <div className="py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
