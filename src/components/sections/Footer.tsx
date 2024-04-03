import Image from 'next/image';
import React from 'react';

const Footer = () => {

    return (
        <footer className="footer footer-center p-10">
            <aside>
                <Image src={"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png"} alt='logo' height={400} width={400} className='h-8 w-8'/>
                <p className="font-bold">
                    ThePortfolyo.
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
            </nav>
        </footer>
    );
};

export default Footer;