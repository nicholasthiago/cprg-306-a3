'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";




export default function RegisterForm() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const router = useRouter();


	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email || !password) {
			setError('Please fill in all fields');
			return;
		}

		try {

			const resUserExists = await fetch('api/userExists', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			const { user } = await resUserExists.json();

			if (user) {
				setError("User already exists");
				return;
			}

			const res = await fetch('api/register', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});

			if (res.ok) {
				const form = e.target;
				form.reset();
				router.push('/');
			} else {
				console.log("Register Failed");
			}

		} catch (error) {
			console.log("Error during registration", error);
		}
	};

	return (
		<>
			<header className="bg-black text-white flex items-center justify-center w-full fixed top-0 text-xl text-center font-bold py-4">
				<div className="flex items-center">
					<img src='company_logo.jpg' alt='logo' className='h-24 w-24' />
					<span className="ml-4">Welcome To The Internet Movies Rental Company</span>
				</div>
			</header>

			<footer className='bg-black text-white flex flex-col w-full text-center fixed bottom-0 p-8'>
				<p>
					The Internet Movies Rental Company (IMR) is your go-to destination for a vast collection of movies.
					Our mission is to provide an enjoyable and seamless movie rental experience for all our users.
				</p>
				<div>
					<h2>Contact Us</h2>
					<p>
						Email: info@imrcompany.com
						<br />
						Phone: (123) 456-7890
					</p>
				</div>
			</footer>

			<div className="grid place-items-center h-screen">
				<div className="shadow-lg p-6 rounded-lg border-t-8 border-black">
					<h1 className="text-xl font-bold my-4">Enter Your Details</h1>
					<form onSubmit={handleSubmit} className="flex flex-col gap-3">
						<input onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
						<input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
						<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
						<button className="bg-black text-white text-xl font-bold cursor-pointer mt-4 px-6 py-2">
							Register</button>
						{error && (
							<div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
						)
						}




						<Link className="text-lg mt-3 text-right" href={"/"}>
							Already have an account?
							<span className="underline">Login</span>

						</Link>

					</form>
				</div>
			</div>
		</>
	);

}