
import Navbar from "@/Components/shared/Navbar";

import { Footer } from "@/Components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
           <AuthProvider>
        <div className="">
          <Navbar></Navbar>
        </div>
     
        <div className="pt-20">
          {children}
        </div>
       
        <div>
          <Footer></Footer>
        </div>
        <ToastContainer position="top-right" autoClose={3000}/>
        </AuthProvider>
      </body>
    </html>
  );
}
