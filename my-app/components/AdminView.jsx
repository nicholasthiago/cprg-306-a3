import movieData from "@/models/sample-data"
import ItemList from "./item-list/item-list";
import { useState } from "react";

const inputStyle = 'px-3 py-2 my-2';


export default function AdminView() {

	const [ movies, setMovies ] = useState( movieData );

	const [ title	, setTitle	] = useState( '' );
	const [ year	, setYear	] = useState(  0 );
	const [ imdb	, setImdb	] = useState(  0 );
	const [ descp	, setDescp	] = useState( '' );



	async function handle_Submit() {
		let newMovie = {
			"title"			: title	,
			"year"			: year	,
			"description"	: descp	,
			"imdb"			: imdb	,
		};

		let updatedList = [ ...movies, newMovie ];

		// console.log( updatedList );
		await setMovies( updatedList );
	}

	return (
		<section className={'flex flex-col items-center justify-between px-24 py-12 font-medium'}>

			<h1 className={'mb-8'}> {'Administrator Dashboard'} </h1>

			<ItemList data={ movies } />

			<form className={'movie-form flex flex-col mt-8'}>

				<input className={ inputStyle }
					type={'text'}
					onInput={ e => setTitle( e.target.value )}
					placeholder={'Title'} />

				<input className={ inputStyle }
					type={'number'}
					onInput={ e => setYear( e.target.value )}
					placeholder={'Year'} />

				<input className={ inputStyle }
					type={'number'}
					onInput={ e => setImdb( e.target.value )}
					placeholder={'IMDB'} />

				<input className={ inputStyle }
					type={'text'}
					onInput={ e => setDescp( e.target.value )}
					placeholder={'Description'} />


				<button className={'bg-slate-700 text-slate-200 px-5 py-2 rounded-sm mt-6'}
					onMouseDown={ handle_Submit }>
					{'Add Movie'}
				</button>
			</form>

		</section>
	);
}