"use client"
import Link from "next/link";
import { FaBehance, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { usePathname } from 'next/navigation';

function HeaderNav() {
    const pathname = usePathname();
    
    return (  
        <>
        <header className=" bg-[#1B1B1B] text-white mx-20 px-15 py-6 rounded-b-2xl ">
            <nav className="flex justify-between w-full" >
                <ul className="flex gap-20 items-center text-[#9C9C9C]">
                    <li><Link href="/" className={pathname === '/' ? 'text-[#62BA1B]' : ''}>Home</Link></li>
                    <li><Link href="/about" className={pathname === '/about' ? 'text-[#62BA1B]' : ''}>About</Link></li>
                    <li><Link href="/contact" className={pathname === '/contact' ? 'text-[#62BA1B]' : ''}>Contact</Link></li>
                </ul>
                <ul className="flex gap-20 items-center text-[#5f5f5f]">
                    <li><Link href="/contact" ><FaLinkedinIn /></Link></li>
                    <li><Link href="/contact"><FaBehance /></Link></li>
                    <li><Link href="/contact"><FaTwitter /></Link></li>
                </ul>
            </nav>
        </header>
        </>
    );
}
 
export default HeaderNav;