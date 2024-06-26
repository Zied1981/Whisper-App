import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

// * Funktion für kreieren von Tokens jeglicher Art
export function createToken(user, tokenType = "access") {
  // accessToken ist folgendermaßen aufgebaut: payload, header, signature
  const payload = {
    sub: user._id,
    type: tokenType,
    iat: Math.ceil(Date.now() / 1000),
  };

  // unterschiedliche expire times für unterschiedliche Arten von tokens

  const expiresIn = { access: "1h", refresh: "2w" }[tokenType];

  const token = jwt.sign(payload, jwtSecret, { expiresIn });

  return token;
}
