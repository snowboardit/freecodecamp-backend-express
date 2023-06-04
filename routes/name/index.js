function name(req, res) {
    const { first, last } = req.query,
        name = formatName(first, last)
    res.status(200)
        .json({ name })
}

function formatName(first, last) {
    return `${first} ${last}`
}

module.exports = name