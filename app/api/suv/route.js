import { connectToDB } from "@utils/database";
import Suv from "@models/suv";

export const GET = async (request) => {
  try {
    await connectToDB();
    const suvs = await Suv.find({}).populate("_id");
    return new Response(JSON.stringify(suvs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all suvs", { status: 500 });
  }
};