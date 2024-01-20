import { useEffect, useState } from "react";

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  
    const {workouts,dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts");
        const json = await response.json();

        if (response.ok) {
          dispatch({type:'SET_WORKOUT',payload : json})
        } else {
          console.error("Failed to fetch workouts");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
            
          ))}
      </div>

      <WorkoutForm/>
    </div>
  );
};

export default Home;
