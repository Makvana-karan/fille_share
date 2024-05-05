import File from "../models/file";

export const uploadImage = async (req, res) => {
  const fileobj = {
    path: req.files.path,
    name: req.files.name,
  };
  try {
    const File = await File.create(fileobj);
    res.status(200).json({ msg: "Uploading image", file });
  } catch (err) {
    console.log(err);
  }
};

export const downloadimg = async (req, res) => {
  try {
    const File = await File.findById(req.params.id);
    file.download++;
    await file.save();
    res.download(file.path);
  } catch (err) {
    console.log(err);
  }
};
