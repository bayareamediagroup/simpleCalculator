const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function () {
    console.log("We're Connected");

    const companySchema = new mongoose.Schema({
        name: String
    });

    const Company = mongoose.model('Company', companySchema);

    const co = new Company({ name: 'Microsoft' })

    console.log("My Company is: ", co.name);
});