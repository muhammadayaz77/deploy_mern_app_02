import jwt from 'jsonwebtoken'


// Middleware to authenticate the user
const isAuthenticated = (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.cookies.token;

    // Check if the token exists
    if (!token) {
      return res.status(401).json({ message: 'No token provided, authentication failed' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user information to the request object
    req.user = decoded.userId;

    // Proceed to the next middleware/route
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default isAuthenticated
