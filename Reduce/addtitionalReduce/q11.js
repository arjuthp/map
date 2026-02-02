/*
Question 11: Library Book Management System
Context: Library system needs to track book availability, overdue books, and popular genres from checkout data.
Input:
*/

/*
Your Task: Use reduce to calculate:
- totalBooks: unique book count
- availableBooks: count of available books
- overdueBooks: count of overdue books
- popularGenres: genre with checkout count (including returned)
- memberTypeStats: checkout statistics by member type

Expected Output:
{
  totalBooks: 5,
  availableBooks: 1,
  overdueBooks: 2,
  popularGenres: {Programming: 2, History: 2, Art: 1},
  memberTypeStats: {student: 3, faculty: 1, public: 1}
}
*/
const libraryData = [
  {bookId: "B001", title: "JavaScript Guide", genre: "Programming", status: "checked_out", dueDate: "2026-01-20", memberType: "student"},
  {bookId: "B002", title: "React Handbook", genre: "Programming", status: "available", dueDate: null, memberType: null},
  {bookId: "B003", title: "History of Rome", genre: "History", status: "overdue", dueDate: "2026-01-15", memberType: "faculty"},
  {bookId: "B001", title: "JavaScript Guide", genre: "Programming", status: "returned", dueDate: "2026-01-25", memberType: "student"},
  {bookId: "B004", title: "Art Basics", genre: "Art", status: "checked_out", dueDate: "2026-02-01", memberType: "public"},
  {bookId: "B005", title: "World War II", genre: "History", status: "overdue", dueDate: "2026-01-18", memberType: "student"}
];

const reducedBooks = libraryData.reduce((accum, value ) =>{
  const count = value.bookId.split("00")[1]; 
  const  key = count;
  if(!accum[key]){
    accum[key]= { 
      totalBooks: 0,
      availableBooks: 0,
      overdueBooks: 0,
      popularGenres:
      {Programming: 0, History: 0, Art:0 },
      memberTypeStats:{},
  }}
  accum[key].totalBooks += 1;
  accum[key].availableBooks += value.status == "available" ? 1 : 0 ;
  accum[key].overdueBooks += value.status == "overdue" ? 1 : 0;
  accum[key].popularGenres[value.genre] = (accum[key].popularGenres[value.genre] || 0) + 1;
  if(value.memberType !== null ){
    accum[key].memberTypeStats[value.memberType] = (accum[key].memberTypeStats[value.memberType] || 0) + 1;
  }
  return accum;
},{});

    
console.log(reducedBooks);