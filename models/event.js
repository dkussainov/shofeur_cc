import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Name is required."],
  },
  image: {
    type: String,
    required: [true, "Image is required."],
  },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
