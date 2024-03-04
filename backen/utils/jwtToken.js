// Import any required modules if needed
import jwt from 'jsonwebtoken';

// Define createToken function
const createToken = (userId) => {
  const payload = { 
    userId: userId,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "30h" });
  return token;
};

// Define sendToken function
export const sendToken = (user, statusCode, res, message) => {
  const token = createToken(user._id); 
  
  
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Set httpOnly to true
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
