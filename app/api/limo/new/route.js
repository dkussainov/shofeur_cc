import { connectToDB } from "@utils/database";
import Limo from "@models/limo";

export const POST = async (req, res) => {
  const { name, price, image, size } = await req.json();

  try {
    await connectToDB();
    const newLimo = new Limo({
      name,
      price,
      image,
      size,
    });

    await newLimo.save();

    return new Response(JSON.stringify(newLimo), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
