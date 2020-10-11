import mongoose from 'mongoose';

class Database {
    constructor() {
        this.init();
    }

    init() {
        mongoose.connect('mongodb://localhost/mydb', { 
            useNewUrlParser: true, 
            useUnifiedTopology: true    
        }, console.log('MongoDB conected'));
    }
}

export default new Database();
