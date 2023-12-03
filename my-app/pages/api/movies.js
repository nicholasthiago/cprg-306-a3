import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
	try {
		const client = await clientPromise;
		const db = await client.db("movies");

		const movies = await db
			.collection("movies")
			.limit(10)
			.toArray();

		res.json(movies);

	} catch (e) {
		console.error(e);
	}
};