'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';



export default function NavBar_2() {
    return (
<nav className="bg-black text-white flex flex-col w-full  fixed-top-0  text-xl font-bold ">
    <ul>
<div class="flex p-3 space-x-8  ">  
<div className='text-xl font-normal'> 
<li>Welcome </li>
</div>
<div className='text-red-00'> 
<Link onClick={() => signOut()} href="/">Logout</Link>
</div>




</div>
</ul>
</nav>




    );

}
