const { CustomAPIError } = require("../errors/custome-error")
const errorHandle = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: "something is wrong" })
}

module.exports = errorHandle