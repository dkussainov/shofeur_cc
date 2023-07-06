import { connectToDB } from "@utils/database";
import Event from "@models/event";

export const GET = async (request) => {
  try {
    await connectToDB();
    const events = await Event.find({}).populate("title");
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all events", { status: 500 });
  }
};
