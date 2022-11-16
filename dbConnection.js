let mongoose = require('mongoose');

//Function to establish a connection with the database
exports.connection = function () { 
    
    const uri = process.env.CONNECTION_STRING;
    mongoose.Promise = global.Promise;
    mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('error', function (error) {
        console.log('Connection to Mongo established.');
        console.log('Could not connect to the database. Exiting now...');
        console.log(error);
        process.exit();
    });
    mongoose.connection.once('open', function () {
        console.log("Successfully connected to the database");
    })

}