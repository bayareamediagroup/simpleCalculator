const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

/* get notified */
db.on("error", console.error.bind(console, 'connection error: '));

db.once("open", function () {
    console.log("Connected");

    /* create schema */
    const automotiveSchema = new mongoose.Schema({
        make: String,
        model: String
    });

    /* create model */
    const Automotive = mongoose.model("Automotive", automotiveSchema);

    const car = new Automotive({ make: 'Ford', model: 'Mustang' });

    console.log("car=> ", car);

    car.save(function (err) {
        if (err) return handleError(err);
        console.log("Saved!");
    });
});