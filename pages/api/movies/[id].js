import { ObjectID } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

const fetchMovieUsingId = async (req, res) => {
  const { db } = await connectToDatabase();
  const { 
    query: { id }
  } = req;

  const movies = await db
    .collection("movies")
    .find({
      '_id': ObjectID(id)
    })
    .toArray();

  return res.json(movies);
};

export default fetchMovieUsingId;