import mongoose from "mongoose";

const DBconnestion = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/files");
  } catch (e) {
    console.log(e);
  }
};

export default DBconnestion;

// the below
