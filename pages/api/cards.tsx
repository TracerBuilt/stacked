import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const cards = await db
    .collection("cards")
    .find({})
    .sort({ name: -1 })
    .limit(20)
    .toArray();

  res.json(cards);
};
