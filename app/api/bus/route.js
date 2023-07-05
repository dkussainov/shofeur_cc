import { connectToDB } from "@utils/database";
import Bus from "@models/bus";

export const GET = async (request) => {
  try {
    await connectToDB();
    const buses = await Bus.find({}).populate("_id");
    return new Response(JSON.stringify(buses), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all buses", { status: 500 });
  }
};