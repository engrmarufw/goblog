"use client";
import Link from 'next/link';
import React from 'react';
import DarkMode from '../DarkMode/DarkMode';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];
    const session = useSession()
    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links.map(link => (
                                    <li><Link className='ms-2' href={link.url} key={link.id}>{link.title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link className='text-xl font-bold' href="/">Maruf Ahamed</Link>

                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">
                        <li><DarkMode></DarkMode></li>
                        {
                            links.map(link => (
                                <li><Link className='ms-2' href={link.url} key={link.id}>{link.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                {
                    session.status === "authenticated" ? <div className="">
                        <a onClick={signOut} className="btn">Logout</a>
                    </div> : <div className="">
                        <Link href="/dashboard/login" className="btn">Login</Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;