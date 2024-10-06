
import React from 'react';

const AskQuestion = () => {
     return (
          <div className='max-w-7xl mx-auto'>
               <section className=" dark:text-gray-800">
                    <div className="">

                         <h2 className="mb-5 text-xl font-semibold leading-none text-start sm:text-5xl">Need Help?</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor.</p>
                         <div className=' mt-12 flex flex-col gap-3'>
                              <div className="collapse collapse-arrow hover:text-warning  ">
                                   <input type="checkbox" />
                                   <div className="collapse-title  flex justify-between text-xl  font-medium">What are the foods like Steel Yat? How does the mail plan work?  </div>
                                   <div className="collapse-content  ">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse collapse-arrow  hover:text-warning ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">How Do I Eat Fresh and Lean?  </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse collapse-arrow hover:text-warning ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">How long do my meals last? </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse collapse-arrow hover:text-warning ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">What if I don't eat them all at once?  </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse  collapse-arrow  hover:text-warning ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">What's in the food? Is it organic? Is it gluten free?   </div>
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