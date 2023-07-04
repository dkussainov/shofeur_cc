import { Schema, model, models } from "mongoose";

const LimoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  price: {
    type: String,
    required: [true, "Price is required."],
  },
  image: {
    type: String,
    required: [true, "Image is required."],
  },
  size: {
    type: String,
    required: [true, "Size is required."],
  },
});

const Limo = models.Limo || model("Limo", LimoSchema);

export default Limo;