import 'app/globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header';

const MyApp = (props) => {
	const { Component, pageProps, children } = props;

	return (
		<section>
			<Header />

			{children}
			<Component {...pageProps} />

			<Footer />
		</section>
	);

}

export default MyApp