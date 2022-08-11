//const jwt = require('jsonwebtoken');

module.exports = async (req: any, res: any, next: any) => {
    try {
        //req.session = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    } catch(err) {
        res.error(401, 'Not Authorized');
    }
};