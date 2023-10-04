import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold mt-5 mb-3">Choose a gallery</h2>
            <div className="flex items-center gap-4">
                <Link className='relative border-4 border-white block w-80 h-96 bg-[url(/illustration.png)] bg-center bg-no-repeat bg-cover' href="/portfolio/illustrations"><h3 className="absolute text-3xl font-bold bottom-2 right-2 text-white">Illustration</h3></Link>
                <Link className='relative border-4 border-white block w-80 h-96 bg-[url(/websites.jpg)] bg-center bg-no-repeat bg-cover' href="/portfolio/websites"><h3 className="absolute text-3xl font-bold bottom-2 right-2 text-white">Websites</h3></Link>
                <Link className='relative border-4 border-white block w-80 h-96 bg-[url(/apps.jpg)] bg-center bg-no-repeat bg-cover' href="/portfolio/applications"><h3 className="absolute text-3xl font-bold bottom-2 right-2 text-white">Application</h3></Link>
            </div>
        </div>
    );
};

export default Portfolio;