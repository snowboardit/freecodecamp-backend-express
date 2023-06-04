const name = {}

function get(req, res) {
    const { first, last } = req.query,
        name = formatName(first, last)
    res.status(200)
        .json({ name })
}

function post(req, res) {
    console.log(req.body)
    const { first, last } = req.body,
        name = formatName(first, last)
    res.status(200)
        .json({ name })
}

function formatName(first, last) {
    return `${first} ${last}`
}

name.get = get;
name.post = post

module.exports = name