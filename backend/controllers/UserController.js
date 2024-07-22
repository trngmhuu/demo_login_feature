const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../config/GenerateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Vui lòng nhập đầy đủ thông tin");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email này đã được đăng ký cho tài khoản khác");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id)
    });
  }
  else {
    res.status(400);
    throw new Error("Đã có lỗi xảy ra, đăng ký thất bại");
  }

});

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user) {
        req.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(401);
        throw new Error("Sai email hoặc mật khẩu");
    }
});

module.exports = { registerUser, authUser };