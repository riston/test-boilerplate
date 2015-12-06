
module.exports = {

    pingPage: function (req, res) {
        
        res.json({
            ping: "pong",
        });        
    },
    
    usersPage: function (req, res) {

        res.json([
            {
                id: 1,
                username: "Mike",
                age: 32,
            },
            {
                id: 2,
                username: "Tony",
                age: 20,
            },
        ]);
    },
};