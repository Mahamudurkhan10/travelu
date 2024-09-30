
import Navbar from "@/Components/shared/Navbar";

import { Footer } from "@/Components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";



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
        <AuthProvider>
        <div className="pt-20">
          {children}
        </div>
        </AuthProvider>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
