const displayContent = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == "/profile") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2 style="text-align: center;">This is the Profile Page</h2>');
        return res.end();
    }
    else if (url == "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2 style="text-align: center; color: green;">cheeseBurgers</h2>');
        return res.end();
    }
    else if (url == "/settings" && method == "POST") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2 style="text-align: center; color: brown;">Form Was Submitted </h2>');
        return res.end();
    }
    else if (url == "/settings") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2 style="text-align: center; color: blue;">Settings</h2> <form action="/settings" method="POST"><input type="text"> <input type="submit" value="Press Me"></from>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<h2 style="text-align: center; color: red;">Page Not Found !</h2>');
    res.end();
}

module.exports = displayContent;