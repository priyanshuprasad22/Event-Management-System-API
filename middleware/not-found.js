const notFound = (req, res) => {
    console.log('Route does not exist');
    return res.status(404).send('Route does not exist')
}

module.exports = notFound
