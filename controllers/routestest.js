const stacyRoute = (req, res) => 
{
    res.send('Hello Stacy');
};

const testRoute = (req, res) => 
{
    res.send('Hello Test');
}

module.exports = 
{
    stacyRoute,
    testRoute
};