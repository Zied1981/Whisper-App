import { UserService } from "../services/serviceIndex.js";

async function getAllUsersCtrl(req, res) {
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

async function postLoginUserCtrl(req, res) {
  try {
    const userInfo = {
      nickname: req.body.nickname,
      password: req.body.password,
    };

    const result = await UserService.loginUser(userInfo);
    if (result.tokens.refreshToken) {
      req.session.refreshToken = result.tokens.refreshToken;
    }
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}

async function postRefreshAccessTokenCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const result = await UserService.refreshAccessToken(authenticatedUserId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message });
  }
}

export const UserController = {
  getAllUsersCtrl,
  postRegisterUserCtrl,
  postLoginUserCtrl,
  postRefreshAccessTokenCtrl,
};
