import { connectToDB } from "@utils/database";
import Event from "@models/event";

export const POST = async (req, res) => {
  const { title, image } = await req.json();

  try {
    await connectToDB();
    const newEvent = new Event({
      title,
      image,
    });

    await newEvent.save();

    return new Response(JSON.stringify(newEvent), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
