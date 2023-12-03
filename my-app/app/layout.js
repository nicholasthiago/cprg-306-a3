
import { AuthProvider } from './Providers';
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Internet Movie Rental',
	description: 'CPRG 306 - Assignment 03',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<Header />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	)
}