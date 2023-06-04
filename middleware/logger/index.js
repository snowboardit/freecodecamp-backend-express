function logger(req, res, next) {
    const method = req.method,
        path = req.path,
        ip = req.ip,
        log = `${method} ${path} - ${ip}`
    console.log(log)
    next()
}

module.exports = logger;