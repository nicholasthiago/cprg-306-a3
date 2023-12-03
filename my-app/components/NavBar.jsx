'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function NavBar() {
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



<div className='mr-auto '>
<Link className="bg-red-500 items text-white text-lg p-1 rounded-lg" href={"/addMovie"}>Add Movie</Link>
</div>


</div>
</ul>
</nav>




    );

}



