const fs = require('fs');
const mongoose = require('mongoose');
const dotEnv = require("dotenv");
const colors = require('colors');

//Load local Env
dotEnv.config({ path: './config/config.env' })
//Load Model
const BootCamp = require("./models/bootCampModel");

//Connect to DB
mongoose.connect(process.env.MONGO_URL);

//Load the file
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

//Import data to DB

const importData = async () => {
    try {
        await BootCamp.create(bootcamps);
        console.log("Data imported to DB ...".green.inverse);
        process.exit();
    } catch (error) {
        console.log("Error Occured");

    }
}

//Data delete from DB
const deleteData = async () => {
    try {
        await BootCamp.deleteMany();
        console.log("Data Deleted from DB ...".red.inverse);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

if (process.argv[2] === '-i') {
    importData();
}
if (process.argv[2] === '-d') {
    deleteData();
}