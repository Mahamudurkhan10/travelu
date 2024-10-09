
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/services/Provider";
import DashboardNavbar from "@/Components/shared/DashboardNavbar";
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
       <div className="flex   ">
       <div className="bg-warning pt-8 lg:fixed lg:z-10 h-screen px-12">
          <DashboardNavbar></DashboardNavbar>
        </div>
     
        <div className=" flex-1  pl-[420px] p-9">
          {children}
        </div>
       </div>
       
        <div>
          
        </div>
        <ToastContainer position="top-right" autoClose={3000}/>
        </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
