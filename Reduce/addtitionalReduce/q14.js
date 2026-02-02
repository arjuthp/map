
/*
Question 14: Fitness Tracker Data Analysis
Context: Fitness app needs to analyze user workout data for progress tracking and recommendations.
Input:
*/


/*
Your Task: Use reduce to calculate:
- userStats: total workouts, duration, calories burned per user
- activityPopularity: count and average duration per activity type
- dailyTotals: total calories burned per day across all users
- mostActiveUser: user with highest total duration
- averageHeartRate: average heart rate per activity type
*/
const workoutData = [
  {userId: "U001", date: "2026-01-20", activity: "Running", duration: 30, calories: 300, heartRate: 150},
  {userId: "U002", date: "2026-01-20", activity: "Cycling", duration: 45, calories: 400, heartRate: 140},
  {userId: "U001", date: "2026-01-21", activity: "Swimming", duration: 60, calories: 500, heartRate: 130},
  {userId: "U003", date: "2026-01-21", activity: "Running", duration: 25, calories: 250, heartRate: 160},
  {userId: "U002", date: "2026-01-22", activity: "Yoga", duration: 90, calories: 200, heartRate: 100},
  {userId: "U001", date: "2026-01-22", activity: "Running", duration: 35, calories: 350, heartRate: 155}
];

const trackedData = workoutData.reduce((accum, value)=>{
    if(!accum.userStats[value.userId]){
        accum.userStats[value.userId] = {totalWorkouts: 0, duration:0, calories: 0 }  
    };
    accum.userStats[value.userId].totalWorkouts += 1; 
    accum.userStats[value.userId].duration += value.duration;
    accum.userStats[value.userId].calories += value.calories;


    if(!accum.activityPopularity[value.activity]){
        accum.activityPopularity[value.activity] = {count: 0,averageDuration: 0 };
    }
    accum.activityPopularity[value.activity].count += 1;
   
    const oldAvg = accum.activityPopularity[value.activity].averageDuration;
    const count = accum.activityPopularity[value.activity].count;
    accum.activityPopularity[value.activity].averageDuration = 
    ((oldAvg * (count - 1)) + value.duration) / count;

    if(!accum.mostActiveUser){
        accum.mostActiveUser ={ userId:0, totalDuration: 0 }
    }

    accum.dailyTotals[value.date] = (accum.dailyTotals[value.date] || 0) + value.calories;


    if (accum.userStats[value.userId].duration > (accum.mostActiveUser.totalDuration || 0)) {
    accum.mostActiveUser.userId = value.userId;
    accum.mostActiveUser.totalDuration = accum.userStats[value.userId].duration;
}
    return accum;

},{
        userStats:{},
        activityPopularity: {},
        dailyTotals:{},
        mostActiveUser:{},
        averageHeartRate: {}
        }); 





console.log(trackedData);






/*
Expected Output:
{
  userStats: {
    U001: {workouts: 3, totalDuration: 125, totalCalories: 1150},
    U002: {workouts: 2, totalDuration: 135, totalCalories: 600},
    U003: {workouts: 1, totalDuration: 25, totalCalories: 250}
  },
  activityPopularity: {
    Running: {count: 3, averageDuration: 30},
    Cycling: {count: 1, averageDuration: 45},
    Swimming: {count: 1, averageDuration: 60},
    Yoga: {count: 1, averageDuration: 90}
  },
  dailyTotals: {
    "2026-01-20": 700,
    "2026-01-21": 750,
    "2026-01-22": 550
  },
  mostActiveUser: {userId: "U002", totalDuration: 135},
  averageHeartRate: {Running: 155, Cycling: 140, Swimming: 130, Yoga: 100}
}
*/
