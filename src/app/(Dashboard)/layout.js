
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
       <div className="flex flex-col lg:flex-row md:flex-row  ">
       <div className="bg-warning pt-8 lg:fixed md:fixed lg:z-10 lg:h-screen md:h-screen p-3 xl:px-12 lg:px-4">
          <DashboardNavbar></DashboardNavbar>
        </div>
     
        <div className=" flex-1  xl:pl-[420px] lg:pl-[300px] md:pl-[300px] xl:p-9 ">
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
