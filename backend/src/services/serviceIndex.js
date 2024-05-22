import { registerUser } from "./userService/registerUser.js";
import { showAllUsers } from "./userService/showAllUsers.js";
import { loginUser } from "./userService/loginUser.js";
import { refreshAccessToken } from "./userService/refreshAccessToken.js";

export const UserService = {
  showAllUsers,
  registerUser,
  loginUser,
  refreshAccessToken,
};