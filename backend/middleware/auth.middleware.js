import jwt from "jsonwebtoken";

const checkToken = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    console.log(token);
    if (!token) return res.status(400).json({ message: 'Token must be include in the header' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) return res.status(401).json({ message: 'Unauthorize' });
        req.user = decoded.userId;
        next()
    } catch (error) {
        console.log(error)
        return res.json({ error: "Middleware detected an error" });
    }
};


export default checkToken;