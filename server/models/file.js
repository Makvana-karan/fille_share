import mongoose from "mongoose";

const filename = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  download: {
    type: Number,
    required: true,
    default: 0,
  },
});

const File = mongoose.model("files", filename);

export default File;
