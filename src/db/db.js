import mongoose from 'mongoose';

const conn = mongoose.createConnection('mongodb://localhost/jobSite', {useNewUrlParser : true});

export default conn;