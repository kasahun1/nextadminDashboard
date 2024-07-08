import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");

  // const ITEM_PER_PAGE = 2;
  
    try {
      connectToDB();
      const users = await User.find({ username: { $regex: regex } })
      return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };