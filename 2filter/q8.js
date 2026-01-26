console.log(`Question 8: Filter Overdue Library Books`)
// Context: Library system to find overdue books: borrowing period is 14 days, and you need books borrowed more than 14 days ago that are not yet returned. Today: "2026-01-25".
// Input:
// javascript

// Your Task: Use filter to get books where returnDate is null AND borrowDate is more than 14 days before "2026-01-25" (i.e., borrowed on or before "2026-01-11").
// Expected Output:
// javascript
// [
//   {bookId: "B001", title: "JavaScript Guide", borrowDate: "2026-01-05", returnDate: null},
//   {bookId: "B003", title: "Data Science", borrowDate: "2025-12-28", returnDate: null},
//   {bookId: "B005", title: "Machine Learning", borrowDate: "2026-01-08", returnDate: null}
// ]

const booksDetails = [
  {bookId: "B001", title: "JavaScript Guide", borrowDate: "2026-01-05", returnDate: null},
  {bookId: "B002", title: "Python Basics", borrowDate: "2026-01-15", returnDate: "2026-01-22"},
  {bookId: "B003", title: "Data Science", borrowDate: "2025-12-28", returnDate: null},
  {bookId: "B004", title: "Web Development", borrowDate: "2026-01-18", returnDate: null},
  {bookId: "B005", title: "Machine Learning", borrowDate: "2026-01-08", returnDate: null},
  {bookId: "B006", title: "React Handbook", borrowDate: "2026-01-12", returnDate: "2026-01-24"}
]

let currentDate = "2026-01-25";
const overdueBooks = booksDetails.filter ((books)=> books.returnDate === null && books.borrowDate <="2026-01-11");
console.log (overdueBooks);