import { connectToDB } from "@utils/database";
import Limo from "@models/limo";

export const GET = async (request) => {
  try {
    await connectToDB();
    const limos = await Limo.find({}).populate("_id");
    return new Response(JSON.stringify(limos), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all limos", { status: 500 });
  }
};
