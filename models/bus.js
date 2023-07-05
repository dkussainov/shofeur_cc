import { Schema, model, models } from "mongoose";

const BusSchema = new Schema({
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

const Bus = models.Bus || model("Bus", BusSchema);

export default Bus;