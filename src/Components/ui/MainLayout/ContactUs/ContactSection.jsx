import { BriefcaseBusiness, MapPin, MessageCircleMore } from 'lucide-react';
import React from 'react';

export default function ContactSection() {
    return (
        <section className='max-w-7xl px-0 lg:px-4 mx-auto mt-12 mb-12  '>
            <div className='grid lg:grid-cols-3 gap-3'>
            
                <div className='flex hover:shadow-2xl items-center justify-center flex-col p-5 space-y-3 border'>
                    <MessageCircleMore size={40} className='text-warning' />
                    <h2 className='text-2xl font-semibold'>Get In Touch</h2>
                    <div className='text-center'>
                        <p>Telephone: +57003 265 441</p>
                        <p className='p-2'>Mobile: +5012425657</p>
                    </div>
                    <a href="mailto:hello@Travalu.com" className='text-lg text-warning font-semibold'>
                        hello@Travalu.com
                    </a>
                </div>
            
                <div className='flex hover:shadow-2xl items-center justify-center flex-col p-5 space-y-3 border'>
                    <MapPin size={40} className='text-warning' />
                    <h2 className='text-2xl font-semibold'>Visit Our Location</h2>
                    <div className='text-center'>
                        <p>Manhatta Hall Veerpolder 7 2361 Empor</p>
                        <p className='p-2'>Ltd 1258, Melbourne, Australia</p>
                    </div>
                    <p className='text-lg text-warning font-semibold'>
                    Get Directions
                    </p>
                </div>
            
                <div className='flex hover:shadow-2xl items-center justify-center flex-col p-5 space-y-3 border'>
                    <BriefcaseBusiness size={40} className='text-warning' />
                    <h2 className='text-2xl font-semibold'>Looking for a career?</h2>
                    <div className='text-center'>
                        <p>
                        perspiciatis unde omnis iste natus error sit</p>
                        <p className='p-2'>voluptatem accusantium.</p>
                    </div>
                    <a href="mailto:careers@Travalu.com" className='text-lg text-warning font-semibold'>
                    careers@travleu.com
                    </a>
                </div>

              
            </div>
        </section>
    );
}
