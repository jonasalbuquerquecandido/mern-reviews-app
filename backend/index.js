import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient // import { MongoClient } = mongodb.MongoClient é a mesma coisa

const port = process.env.PORT || 8000

// CONECTANDO A APLICAÇÃO COM O MONGODB
MongoClient.connect ( // conecta ao banco de dados
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50, // número máximo de conecções sumultâneas 
        wtimeout: 2500, // tempo máximo de espera (2,5 segundos)
        useNewUrlParse: true }
    )

    // TRATAMENTO DE ERRO 
    .catch(err => {
        console.error(err.stack) //mostra no console
        process.exit(1) //fecha tudo
    })

    .then(async client =>)

