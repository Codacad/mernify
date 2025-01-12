import bcrypt, { hash } from "bcrypt";
export const passwordMatch = async (password, hashedPassword) => {
  const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
  return isPasswordMatch;
};
