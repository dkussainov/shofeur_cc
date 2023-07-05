import { connectToDB } from "@utils/database";
import Bus from "@models/bus";

export const POST = async (req, res) => {
  const { name, price, image, size } = await req.json();

  try {
    await connectToDB();
    const newBus = new Bus({
      name,
      price,
      image,
      size,
    });

    await newBus.save();

    return new Response(JSON.stringify(newBus), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
