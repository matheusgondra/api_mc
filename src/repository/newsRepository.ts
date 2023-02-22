import { model } from "mongoose";
import { NewsSchema } from "../models/newsSchema";

export const NewsRepository = model("news", NewsSchema);
