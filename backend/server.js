import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.rout.js' //vou criar

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found"})) //alerta caso alguém tente um local diferente dor referenciado

export default app