import { ArrowBigRight } from 'lucide-react';
import React from 'react';

const AskQuestion = () => {
     return (
          <div className='max-w-7xl mx-auto'>
               <section className=" dark:text-gray-800">
                    <div className="  flex flex-col justify-center  ">

                         <h2 className="mb-5 text-xl font-semibold leading-none text-start sm:text-5xl">Need Help?</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor.</p>
                         <div className='mt-5 flex flex-col gap-3'>
                              <div className="collapse  hover:text-warning border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl  font-medium">What are the foods like Steel Yat? How does the mail plan work? <ArrowBigRight className='text-yellow-700'></ArrowBigRight> </div>
                                   <div className="collapse-content ">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">How Do I Eat Fresh and Lean? <ArrowBigRight className='text-yellow-700'></ArrowBigRight> </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">How long do my meals last? <ArrowBigRight className='text-yellow-700'></ArrowBigRight> </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">What if I don't eat them all at once? <ArrowBigRight className='text-yellow-700'></ArrowBigRight> </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse  border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">What's in the food? Is it organic? Is it gluten free? <ArrowBigRight  className='text-yellow-700'></ArrowBigRight>  </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>    
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default AskQuestion;