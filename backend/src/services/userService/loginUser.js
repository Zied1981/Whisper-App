import { User } from "../../models/User.js";
import { createToken } from "../../utils/createToken.js";
import { hash } from "../../utils/hash.js";
import { userToView } from "./helpers.js";

export async function loginUser({ nickname, password }) {
  const user = await User.findOne({ nickname });
  if (!user) throw new Error("invalid login");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("invalid login");

  const accessToken = createToken(user, "access");
  //   const refreshToken = createToken(user, "refresh");

  return { user: userToView(user), tokens: { accessToken } };
}
