
import Navbar from "@/Components/shared/Navbar";

import { Footer } from "@/Components/shared/Footer";



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/services/Provider";
import DashboardNavbar from "@/Components/shared/DashboardNavbar";

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
          
        <Providers>
       <div className="flex   ">
       <div className="bg-warning  p-5 h-screen px-12">
          <DashboardNavbar></DashboardNavbar>
        </div>
     
        <div className=" flex-1 p-12">
          {children}
        </div>
       </div>
       
        <div>
          
        </div>
        <ToastContainer position="top-right" autoClose={3000}/>
        </Providers>
       
      </body>
    </html>
  );
}
