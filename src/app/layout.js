

import AuthProvider from "@/services/AuthProvider";
import "./globals.css";
import Providers from "@/services/Provider";




export const metadata = {
  title: "Travelu",
  description: "Travelu.. choice your destination",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" >


      <body  > 
    
        {children}   
    
     
      </body>


     
        
         

     

    </html >
  );
}
