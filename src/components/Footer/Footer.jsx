import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className="a">
            © 2023 Maruf Ahamed. All Rights Reserved. 
            </div>
            <div className="flex items-center">
            <Image className='ms-2' src="/1.png" width={32} height={32} /> 
            <Image className='ms-2' src="/2.png" width={32} height={32} /> 
            <Image className='ms-2' src="/3.png" width={32} height={32} /> 
            <Image className='ms-2' src="/4.png" width={32} height={32} /> 
            </div>
        </div>
    );
};

export default Footer;