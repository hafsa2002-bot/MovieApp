const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 5000

const uri = require("./mongo_uri")
let mongoose = require('mongoose')

const api_key = "8def2fa47c86a07209cafb1c6eb4409b"


app.use(cors())
app.use(express.json());
app.use("/uploads", express.static("uploads"))

// connect to mongo db
mongoose.connect(uri)
    .then(() => {console.log("MongoDB connected")})
    .catch((err) => console.log("ERROR: ", err))

const Movie = require('./models/Movie.js') 

app.get("/movies", async (req, res) => {
    // search how to use axios inside a get method
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        res.json(response.data)
    } catch (err) {
        console.log("ERROR: ", err)
        res.status(500).json({error:"failed to fetch movies"})
    }
})

// search a movie
app.get("/search", async(req, res) => {
    try {
        const query = req.query.query.toLowerCase()
        if(!query){
            return res.status(400).json({error: "Qurey parameter is required"})
        }
        const response = await axios.get("https://api.themoviedb.org/3/search/movie",
            {
                params:{
                    api_key: api_key,
                    query: query,
            },
        }
        )
        let movies = response.data.results;
        movies = movies.filter(movie => 
            movie.title.toLowerCase().includes(query)
        )
        res.json({results: movies})
        
    } catch (err) {
        console.log("ERROR fetching movies: ", err.message)
        res.status(500).json({err: "Internal Server Error"})
    }
})

// configure multer for files uploads
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage})

app.post("/addMovie", upload.single("moviePhoto"), async (req, res) => {
    const { movieName, movieDate, trailer } = req.body;
    const moviePhoto = req.file ? `/uploads/${req.file.filename}` : null

    console.log({movieName, movieDate, moviePhoto})
    const newMovie = new Movie({ movieName, movieDate, moviePhoto, trailer });
    await newMovie.save();
    res.json({message: "Movie added successfully", moviePhoto})
})


// get list of movies added
app.get("/list", async (req, res) => {
    try{
        const listMovies = await Movie.find()
        res.json(listMovies)
    } catch(err){
        console.log("Error: ", err)
        res.status(500).json({error: "Internal server error"})
    }
})

// get details of a movie by id
app.get("/movies/:id", async (req, res) => {
    try{
        const movieById = await Movie.find({_id: req.params.id})
        res.send(movieById[0])
    }catch(err){
        console.log("ERROR : ", err)
        res.status(500).json({error: ""})
    }
})

// update isFavorite variable
app.put("/movies/favorite/:fvrt_id", async (req, res) => {
    try{
        const updateFavorite = await Movie.findOneAndUpdate(
            { _id: req.params.fvrt_id }, 
            {isFavorite: req.body.isFavorite}, 
            {new:true})
        if (!updateFavorite) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.json(updateFavorite)
    } catch(error) {
        console.log("ERROR: ",error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

// get favorites
app.get("/favorites", async (req, res) => {
    try{
        const favorites = await Movie.find({isFavorite: true})
        res.send(favorites)
    }catch(error){
        console.log("ERROR : ", error)
        res.status(500).json({error: "Internal server Error"})
    }
})


app.listen(port, () => console.log(`http://localhost:${port}`))