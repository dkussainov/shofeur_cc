import { connectToDB } from "@utils/database";
import Suv from "@models/suv";

export const POST = async (req, res) => {
  const { name, price, image, size } = await req.json();

  try {
    await connectToDB();
    const newSuv = new Suv({
      name,
      price,
      image,
      size,
    });

    await newSuv.save();

    return new Response(JSON.stringify(newSuv), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
