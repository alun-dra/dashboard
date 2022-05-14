import {MongoClient} from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI || "mongodb+srv://alvaro:240500@cluster0.sez3s.mongodb.net/dashboard?retryWrites=true&w=majority", {useUnifiedTopology: true})

export default client;