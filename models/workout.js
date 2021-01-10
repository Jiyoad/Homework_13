const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of exercise"
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter duration"
            },
            weight: {
                type: Number,
                trim: true,
                required: "Enter weight"
            },
            reps: {
                type: Number,
                trim: true,
                required: "Enter amount of reps"
            },
            sets: {
                type: Number,
                trim: true,
                required: "Enter number of sets"
            },
            distance: {
                type: Number,
                trim: true,
                required: "Enter a distance of exercise"
            }
        }
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;