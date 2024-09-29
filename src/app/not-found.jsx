 
 const error = () => {
     return (
       <div className="bg-gray-100 h-screen flex flex-col justify-center items-center" style={{backgroundImage:"url('https://i.ibb.co.com/d7LcmmP/bgparallax-03.jpg')"}}>
          
      <div className="tracking-widest  text-center">
           <span className="text-gray-200 text-9xl font-semibold block">404</span>
           <span className="text-gray-200 text-xl">
           
           </span>
         </div>

         <div className="mt-6">
           <a
             href="/"
             className=" animate-pulse px-6  font-mono btn btn-warning text-xl p-3 rounded-md hover:shadow-md transition-shadow duration-300"
           >
             Go back
           </a>
         </div>
       </div>
     );
   };
   
   export default error;
   