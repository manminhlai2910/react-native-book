import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUNDINARY_CLOUD_NAME,
  api_key: process.env.CLOUNDINARY_KEY,
  api_secret: process.env.CLOUNDINARY_SECRET,
});

export default cloudinary;
