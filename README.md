
# website

Source code of my personal website, built using ExpressJS + NodeJS +MongoDB + AngularJS.

This application is built to be managed with Website-Admin App.

## Config File

You will need a config.js file next to server.js like this:
```
module.exports = {
    logLevel : 'debug', // none, normal, debug
    dbURI : 'mongodb://username:password@ds059712.mongolab.com:59712/dbname', // An URI of mongolab.com will look like these
    mailer : {
        from: 'admin@augustolemble.com',
        host: 'smtp.augustolemble.com', // hostname
        secureConnection: true, // use SSL
        port: 465, // port for secure SMTP
        transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
        auth: {
            user: 'admin@augustolemble.com',
            pass: 'yourPassword'
        }
    },
    spotifyCredentials : {
        clientId : 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        clientSecret : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        myUser : 'xxxxx'
    }
};
```
Make sure that the user on the db has write/read permissions.

## Run the app

Install the dependencies first:
```
npm install
```
Then run the app, by default the app is configured to run over port 80:
```
sudo node server.js
```
Go to localhost and you will see the website online.
