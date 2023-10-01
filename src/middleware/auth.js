module.exports = (req, res, next) => {
    const API_KEY = req.headers.api_key || req.headers.API_KEY
    if (API_KEY == process.env.API_KEY) {
        return next()
    }

    res.status(500).send("Auth fail")
}
