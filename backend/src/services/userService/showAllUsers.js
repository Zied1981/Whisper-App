import { User } from "../../models/User.js";
export function showAllUsers() {
  return User.find({});
}
