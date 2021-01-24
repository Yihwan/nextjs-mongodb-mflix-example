import { connectToDatabase } from "../../../util/mongodb";

const fetchMovies = async (_, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return res.json(movies);
};

export default fetchMovies;