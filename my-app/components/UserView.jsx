import movieData from "@/models/sample-data"
import ItemList from "./item-list/item-list";
import { useState } from "react";


export default function UserView() {

	const [ movies, setMovies ] = useState( movieData );

	return (
		<section className={'flex flex-col items-center justify-between px-24 py-12 font-medium'}>

			<h1 className={'mb-8'}> {'Administrator Dashboard'} </h1>

			<ItemList data={ movies } />

		</section>
	);
}