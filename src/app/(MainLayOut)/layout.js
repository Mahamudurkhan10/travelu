

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./../../Components/shared/Navbar'), { ssr: false });
import { Footer } from "@/Components/shared/Footer";



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/services/Provider";
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
          <AuthProvider>
        <Providers>
        <div >
          <Navbar></Navbar>
        </div>
     
        <div className="pt-20">
          {children}
        </div>
       
        <div>
          <Footer></Footer>
        </div>
        <ToastContainer position="top-right" autoClose={3000}/>
        </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
