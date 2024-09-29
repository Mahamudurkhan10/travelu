
import Navbar from "@/Components/shared/Navbar";

import { Footer } from "@/Components/shared/Footer";



export const metadata = {
  title: "Travelu",
  description: "Travelu.. choice your destination",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" >

      <body
        className={`  antialiased  `}
      >
        <div className="">
          <Navbar></Navbar>
        </div>
        <div className="pt-20">
          {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
