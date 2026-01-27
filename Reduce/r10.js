// Question 10: Complex Sales Report
// Context: Sales dashboard needs comprehensive metrics: total revenue, revenue by region, top performing salesperson per region, and monthly trends.
// Input:
// javascript

// Your Task: Use reduce to calculate totalRevenue, revenueByRegion (total per region), topSalespersonByRegion (person with highest total in each region), and monthlyRevenue (total per month).
// Expected Output:
// javascript
// {
//   totalRevenue: 39300,
//   revenueByRegion: {
//     North: 20300,
//     South: 6500,
//     East: 12500
//   },
//   topSalespersonByRegion: {
//     North: {name: "Alice", total: 10500},
//     South: {name: "Bob", total: 6500},
//     East: {name: "Diana", total: 12500}
//   },
//   monthlyRevenue: {
//     Jan: 18500,
//     Feb: 20800
//   }
// }

const salesPersonDetails = [
  {salesperson: "Alice", region: "North", amount: 5000, month: "Jan"},
  {salesperson: "Bob", region: "South", amount: 3000, month: "Jan"},
  {salesperson: "Alice", region: "North", amount: 5500, month: "Feb"},
  {salesperson: "Charlie", region: "North", amount: 4500, month: "Jan"},
  {salesperson: "Bob", region: "South", amount: 3500, month: "Feb"},
  {salesperson: "Diana", region: "East", amount: 6000, month: "Jan"},
  {salesperson: "Charlie", region: "North", amount: 4800, month: "Feb"},
  {salesperson: "Diana", region: "East", amount: 6500, month: "Feb"}
]

const salesReport = salesPersonDetails.reduce((accum, value)=>{

    accum.totalRevenue += value.amount;

    accum.revenueByRegion[value.region] += value.amount;

    if(value.amount> accum.topSalesPersonByRegion[value.region].total){
        accum.topSalesPersonByRegion[value.region]={
            name: value.salesperson,
            total: value.amount
        };
    }
    accum.monthlyRevenue[value.month] = (accum.monthlyRevenue[value.month] || 0) + value.amount;
    return accum;
}, {  
    totalRevenue: 0,
    revenueByRegion: {North: 0, South: 0, East: 0},
    topSalesPersonByRegion: {North: {name: "", total: 0}, South: {name: "", total: 0}, East: {name: "", total: 0}},
    monthlyRevenue: {}});
console.log(salesReport);
