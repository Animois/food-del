import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.token;

    if (!authHeader) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("✅ Decoded Token:", decoded);

    // store user id safely in request
    req.userId = decoded.id;

    next();
  } catch (error) {
    console.log("❌ JWT Error:", error.message);
    res.status(401).json({ success: false, message: "Invalid Token", error: error.message });
  }
};

export default authMiddleware;
