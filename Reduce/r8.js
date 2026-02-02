console.log(`Question 8: Time Series Data Aggregation`)
// Context: IoT sensor data needs to be aggregated by hour with min, max, average temperature readings.
// Input:
// javascript

// Your Task: Use reduce to group by hour and calculate min, max, average, and readingCount for each hour.
// Expected Output:
// javascript
// {
//   "14:00": {min: 22.5, max: 23.1, average: 22.8, readingCount: 3},
//   "15:00": {min: 24.0, max: 24.5, average: 24.23, readingCount: 3},
//   "16:00": {min: 23.2, max: 23.5, average: 23.35, readingCount: 2}
// }

const temperatureReadings = [
  {timestamp: "2026-01-25 14:00", temperature: 22.5},
  {timestamp: "2026-01-25 14:15", temperature: 23.1},
  {timestamp: "2026-01-25 14:30", temperature: 22.8},
  {timestamp: "2026-01-25 15:00", temperature: 24.2},
  {timestamp: "2026-01-25 15:15", temperature: 24.5},
  {timestamp: "2026-01-25 15:30", temperature: 24.0},
  {timestamp: "2026-01-25 16:00", temperature: 23.5},
  {timestamp: "2026-01-25 16:15", temperature: 23.2}
]


const reducedTemperatureReadings = temperatureReadings.reduce((accum, value)=>{
    const time= value.timestamp.split(' ')[1].split(':')[0];
    let key = time >=16 ? "16:00": time >=15 && time <= 16 ? "15:00" : "14:00";    
    
    if(!accum[key]){
        accum[key] = {
            min: Infinity,
            max: -Infinity,
            totalTemp: 0,
            average: 0, 
            readingCount: 0
        };
    }
    accum[key].min =Math.min(accum[key].min, value.temperature);
    accum[key].max = Math.max(accum[key].max, value.temperature);
    
    accum[key].readingCount += 1;
    accum[key].average = ((accum[key].average * (accum[key].readingCount - 1)) + value.temperature) / accum[key].readingCount;
    

    return accum;
},{})
console.log(reducedTemperatureReadings);