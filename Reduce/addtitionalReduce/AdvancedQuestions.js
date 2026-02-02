// Advanced Reduce Practice Questions

/*
Question 11: Library Book Management System
Context: Library system needs to track book availability, overdue books, and popular genres from checkout data.
Input:
*/
const libraryData = [
  {bookId: "B001", title: "JavaScript Guide", genre: "Programming", status: "checked_out", dueDate: "2026-01-20", memberType: "student"},
  {bookId: "B002", title: "React Handbook", genre: "Programming", status: "available", dueDate: null, memberType: null},
  {bookId: "B003", title: "History of Rome", genre: "History", status: "overdue", dueDate: "2026-01-15", memberType: "faculty"},
  {bookId: "B001", title: "JavaScript Guide", genre: "Programming", status: "returned", dueDate: "2026-01-25", memberType: "student"},
  {bookId: "B004", title: "Art Basics", genre: "Art", status: "checked_out", dueDate: "2026-02-01", memberType: "public"},
  {bookId: "B005", title: "World War II", genre: "History", status: "overdue", dueDate: "2026-01-18", memberType: "student"}
];

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

/*
Question 12: Social Media Analytics
Context: Social media platform needs engagement metrics: likes, shares, comments by post type and time period.
Input:
*/
const socialMediaPosts = [
  {postId: "P001", type: "image", likes: 150, shares: 25, comments: 30, timestamp: "2026-01-20 10:00", author: "user1"},
  {postId: "P002", type: "video", likes: 300, shares: 45, comments: 60, timestamp: "2026-01-20 14:00", author: "user2"},
  {postId: "P003", type: "text", likes: 80, shares: 10, comments: 15, timestamp: "2026-01-21 09:00", author: "user1"},
  {postId: "P004", type: "image", likes: 200, shares: 35, comments: 40, timestamp: "2026-01-21 16:00", author: "user3"},
  {postId: "P005", type: "video", likes: 450, shares: 70, comments: 85, timestamp: "2026-01-22 11:00", author: "user2"},
  {postId: "P006", type: "text", likes: 120, shares: 15, comments: 25, timestamp: "2026-01-22 15:00", author: "user1"}
];

/*
Your Task: Use reduce to calculate:
- totalEngagement: sum of all likes, shares, comments
- engagementByType: total engagement per post type
- dailyEngagement: total engagement per day
- topAuthor: author with highest total engagement
- averageEngagementPerPost: average likes, shares, comments per post

Expected Output:
{
  totalEngagement: {likes: 1300, shares: 200, comments: 255},
  engagementByType: {
    image: {likes: 350, shares: 60, comments: 70},
    video: {likes: 750, shares: 115, comments: 145},
    text: {likes: 200, shares: 25, comments: 40}
  },
  dailyEngagement: {
    "2026-01-20": {likes: 450, shares: 70, comments: 90},
    "2026-01-21": {likes: 280, shares: 45, comments: 55},
    "2026-01-22": {likes: 570, shares: 85, comments: 110}
  },
  topAuthor: {name: "user2", totalLikes: 750},
  averageEngagementPerPost: {likes: 216.67, shares: 33.33, comments: 42.5}
}
*/

/*
Question 13: Restaurant Order Analytics
Context: Restaurant management system needs to analyze orders for menu optimization and revenue tracking.
Input:
*/
const restaurantOrders = [
  {orderId: "O001", items: [{name: "Burger", price: 12, category: "Main", quantity: 2}], table: 5, server: "Alice", timestamp: "2026-01-25 12:30"},
  {orderId: "O002", items: [{name: "Salad", price: 8, category: "Appetizer", quantity: 1}, {name: "Pasta", price: 15, category: "Main", quantity: 1}], table: 3, server: "Bob", timestamp: "2026-01-25 13:00"},
  {orderId: "O003", items: [{name: "Pizza", price: 18, category: "Main", quantity: 1}, {name: "Soda", price: 3, category: "Beverage", quantity: 2}], table: 7, server: "Alice", timestamp: "2026-01-25 13:15"},
  {orderId: "O004", items: [{name: "Burger", price: 12, category: "Main", quantity: 1}, {name: "Fries", price: 5, category: "Side", quantity: 1}], table: 2, server: "Charlie", timestamp: "2026-01-25 14:00"}
];

/*
Your Task: Use reduce to calculate:
- totalRevenue: sum of all order values
- revenueByCategory: total revenue per food category
- popularItems: item names with total quantity sold
- serverPerformance: revenue generated per server
- averageOrderValue: average value per order

Expected Output:
{
  totalRevenue: 95,
  revenueByCategory: {Main: 69, Appetizer: 8, Beverage: 6, Side: 5},
  popularItems: {Burger: 3, Salad: 1, Pasta: 1, Pizza: 1, Soda: 2, Fries: 1},
  serverPerformance: {Alice: 48, Bob: 23, Charlie: 17},
  averageOrderValue: 23.75
}
*/

/*
Question 14: Fitness Tracker Data Analysis
Context: Fitness app needs to analyze user workout data for progress tracking and recommendations.
Input:
*/
const workoutData = [
  {userId: "U001", date: "2026-01-20", activity: "Running", duration: 30, calories: 300, heartRate: 150},
  {userId: "U002", date: "2026-01-20", activity: "Cycling", duration: 45, calories: 400, heartRate: 140},
  {userId: "U001", date: "2026-01-21", activity: "Swimming", duration: 60, calories: 500, heartRate: 130},
  {userId: "U003", date: "2026-01-21", activity: "Running", duration: 25, calories: 250, heartRate: 160},
  {userId: "U002", date: "2026-01-22", activity: "Yoga", duration: 90, calories: 200, heartRate: 100},
  {userId: "U001", date: "2026-01-22", activity: "Running", duration: 35, calories: 350, heartRate: 155}
];

/*
Your Task: Use reduce to calculate:
- userStats: total workouts, duration, calories burned per user
- activityPopularity: count and average duration per activity type
- dailyTotals: total calories burned per day across all users
- mostActiveUser: user with highest total duration
- averageHeartRate: average heart rate per activity type

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

/*
Question 15: E-learning Platform Analytics
Context: Online learning platform needs course completion rates, student progress, and instructor performance metrics.
Input:
*/
const learningData = [
  {studentId: "S001", courseId: "C001", instructor: "Dr. Smith", progress: 100, grade: 85, timeSpent: 120, category: "Programming"},
  {studentId: "S002", courseId: "C001", instructor: "Dr. Smith", progress: 75, grade: null, timeSpent: 90, category: "Programming"},
  {studentId: "S001", courseId: "C002", instructor: "Prof. Johnson", progress: 60, grade: null, timeSpent: 80, category: "Design"},
  {studentId: "S003", courseId: "C001", instructor: "Dr. Smith", progress: 100, grade: 92, timeSpent: 110, category: "Programming"},
  {studentId: "S002", courseId: "C003", instructor: "Dr. Brown", progress: 100, grade: 78, timeSpent: 150, category: "Marketing"},
  {studentId: "S003", courseId: "C002", instructor: "Prof. Johnson", progress: 45, grade: null, timeSpent: 60, category: "Design"}
];

/*
Your Task: Use reduce to calculate:
- courseStats: completion rate, average grade, total students per course
- instructorPerformance: courses taught, completion rate, average grade per instructor
- categoryAnalysis: enrollment and completion stats per category
- studentProgress: courses enrolled, completed, average grade per student
- overallMetrics: total enrollments, completion rate, average time spent

Expected Output:
{
  courseStats: {
    C001: {completionRate: 66.67, averageGrade: 88.5, totalStudents: 3},
    C002: {completionRate: 0, averageGrade: null, totalStudents: 2},
    C003: {completionRate: 100, averageGrade: 78, totalStudents: 1}
  },
  instructorPerformance: {
    "Dr. Smith": {coursesTaught: 1, completionRate: 66.67, averageGrade: 88.5},
    "Prof. Johnson": {coursesTaught: 1, completionRate: 0, averageGrade: null},
    "Dr. Brown": {coursesTaught: 1, completionRate: 100, averageGrade: 78}
  },
  categoryAnalysis: {
    Programming: {enrollments: 3, completions: 2, completionRate: 66.67},
    Design: {enrollments: 2, completions: 0, completionRate: 0},
    Marketing: {enrollments: 1, completions: 1, completionRate: 100}
  },
  studentProgress: {
    S001: {coursesEnrolled: 2, coursesCompleted: 1, averageGrade: 85},
    S002: {coursesEnrolled: 2, coursesCompleted: 1, averageGrade: 78},
    S003: {coursesEnrolled: 2, coursesCompleted: 1, averageGrade: 92}
  },
  overallMetrics: {totalEnrollments: 6, completionRate: 50, averageTimeSpent: 101.67}
}
*/