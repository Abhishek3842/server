const admin = require("../middleware/firebase");

const verifyFirebaseToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        console.error("No token provided");
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    console.log("🔍 Received token:", token);

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("✅ Decoded Token:", decodedToken);

        req.user = decodedToken;
        next();
    } catch (error) {
        console.error("Firebase Auth Error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = verifyFirebaseToken;
