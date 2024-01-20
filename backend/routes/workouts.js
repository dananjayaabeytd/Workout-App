const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

// get all workouts
router.get('/', getWorkouts);

// get single workout
router.get('/:id',getworkout)

// Post a new workout
router.post('/',createWorkout)

// delete a workout
router.delete('/:id',deleteWorkout)

//Update a wprkout
router.patch('/:id',updateWorkout)

module.exports = router