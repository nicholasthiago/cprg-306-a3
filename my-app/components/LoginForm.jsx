'use client';
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import userDashboard from "@/pages/userDashboard";
import adminDashboard from "@/pages/adminDashboard";


export default function LoginForm() {

	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			console.log("Checkpoint-01");

			const res = await signIn('credentials', {
				email,
				password,
				redirect: false,
			});

			if (res.error) {
				setError("Invalid Credentials");
				return;
			}

			if (email === "mike7@yahoo.com") {

				console.log("Checkpoint-02 : redirect to Admin Dashboard");
				router.push("/adminDashboard");

			} else {
				console.log("Checkpoint-03 : redirect to User Dashboard");
				router.push("/userDashboard");
			}


		} catch (error) {
			console.log(error);
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
					<h1 className="text-xl font-bold my-4">Login</h1>
					<form onSubmit={handleSubmit} className="flex flex-col gap-3">
						<input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
						<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
						<button className="bg-black text-white text-xl font-bold rounded-lg cursor-pointer mt-4 px-6 py-2">Login</button>

						{error && (
							<div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
						)}



						<Link className="text-lg mt-3 text-right" href={"/register"}>
							Don't have an account?
							<span className="underline">Register</span>

						</Link>

					</form>
				</div>
			</div>
		</>
	);
}








