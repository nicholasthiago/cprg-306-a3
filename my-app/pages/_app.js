import 'app/globals.css'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar';

const MyApp = (props) => {
	const { Component, pageProps, children } = props;

	return (
		<section>
			<Navbar />

			{children}
			<Component {...pageProps} />

			<Footer />
		</section>
	);

}

export default MyApp