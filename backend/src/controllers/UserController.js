import { UserService } from "../services/serviceIndex.js";

async function getAllUsersCtrl(_, res) {
  try {
    const result = await UserService.showAllUsers();
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not get all users" });
  }
}

async function postRegisterUserCtrl(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserService.registerUser(userInfo);
    res.status(201).json({ result }); // 201 Status = "Created"
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not register user" });
  }
}
export const UserController = {
  getAllUsersCtrl,
  postRegisterUserCtrl,
};
