/*
Question 12: Social Media Analytics
Context: Social media platform needs engagement metrics: likes, shares, comments by post type and time period.
Input:
*/

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

const socialMediaPosts = [
  {postId: "P001", type: "image", likes: 150, shares: 25, comments: 30, timestamp: "2026-01-20 10:00", author: "user1"},
  {postId: "P002", type: "video", likes: 300, shares: 45, comments: 60, timestamp: "2026-01-20 14:00", author: "user2"},
  {postId: "P003", type: "text", likes: 80, shares: 10, comments: 15, timestamp: "2026-01-21 09:00", author: "user1"},
  {postId: "P004", type: "image", likes: 200, shares: 35, comments: 40, timestamp: "2026-01-21 16:00", author: "user3"},
  {postId: "P005", type: "video", likes: 450, shares: 70, comments: 85, timestamp: "2026-01-22 11:00", author: "user2"},
  {postId: "P006", type: "text", likes: 120, shares: 15, comments: 25, timestamp: "2026-01-22 15:00", author: "user1"}
];
const engagementMetrics = socialMediaPosts.reduce((accum, value)=> {
   accum.totalEngagement.likes += value.likes;
   accum.totalEngagement.shares += value.shares;
   accum.totalEngagement.comments += value.comments;
   if(!accum.engagementByType[value.type]){
    accum.engagementByType[value.type] = {likes : 0, shares: 0, comments: 0};
   }
   accum.engagementByType[value.type].likes += value.likes;
   accum.engagementByType[value.type].shares += value.shares;
   accum.engagementByType[value.type].comments += value.comments;
   let date = value.timestamp.split(" ")[0];
   if(!accum.dailyEngagement[date]){
    accum.dailyEngagement[date] = {likes: 0, shares: 0, comments: 0};
   };
   accum.dailyEngagement[date].likes += value.likes;
   accum.dailyEngagement[date].shares += value.shares; 
   accum.dailyEngagement[date].comments += value.comments;
   
   let topLikes = value.likes;
   accum.topAuthor[topLikes] = accum.totalEngagement.likes <=  value.author? `{name : ${value.author} , totalLikes: topLikes }` : 0;
   
   accum.averageEngagementPerPost = {
     likes: accum.totalEngagement.likes / socialMediaPosts.length,
     shares: accum.totalEngagement.shares / socialMediaPosts.length, 
     comments: accum.totalEngagement.comments / socialMediaPosts.length
   };
   return accum;
},{
    totalEngagement:{likes: 0, shares: 0, comments: 0},
    engagementByType: {},
    dailyEngagement: {},
    topAuthor: {},
    averageEngagementPerPost:{}});
console.log(engagementMetrics);
