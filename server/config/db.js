const mongoose = require('mongoose');



exports.dbConn = () => {
    const dbURL = "mongodb+srv://propertylord:propertyloard@cluster0.o8ii6zj.mongodb.net/PropertyLord?retryWrites=true&w=majority&appName=Cluster0";
    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
        console.log('DB Cnnted')
    }).catch((err) => console.log(err));
}