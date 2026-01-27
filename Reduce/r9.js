
// Question 9: Product Review Analysis
// Context: E-commerce product page needs review statistics: rating distribution, average rating, total reviews, and sentiment breakdown.
// Input:
// javascript

// Your Task: Use reduce to calculate totalReviews, averageRating, ratingDistribution (count per rating 1-5), verifiedPercentage, and sentimentBreakdown (count per sentiment).
// Expected Output:
// javascript
// {
//   totalReviews: 8,
//   averageRating: 3.625,
//   ratingDistribution: {1: 1, 2: 1, 3: 1, 4: 2, 5: 3},
//   verifiedPercentage: 75,
//   sentimentBreakdown: {positive: 5, neutral: 1, negative: 2}
// }

const productReview = [
  {reviewId: "R001", rating: 5, sentiment: "positive", verified: true},
  {reviewId: "R002", rating: 4, sentiment: "positive", verified: true},
  {reviewId: "R003", rating: 2, sentiment: "negative", verified: false},
  {reviewId: "R004", rating: 5, sentiment: "positive", verified: true},
  {reviewId: "R005", rating: 3, sentiment: "neutral", verified: true},
  {reviewId: "R006", rating: 1, sentiment: "negative", verified: true},
  {reviewId: "R007", rating: 4, sentiment: "positive", verified: false},
  {reviewId: "R008", rating: 5, sentiment: "positive", verified: true}
]
const sentimentAnalysis = productReview.reduce((accum, currval)=>{
    accum.totalReviews += 1 ;
    accum.averageRating = (accum.averageRating * (accum.totalReviews-1) + currval.rating)/accum.totalReviews;
    accum.ratingDistribution[currval.rating] += 1;
    accum.verifiedPercentage += currval.verified = true ? accum.verifiedPercentage/accum.totalReviews *100 : false;
    accum.sentimentBreakdown[currval.sentiment] +=1;
    return accum;


}, {totalReviews: 0,
    averageRating: 0,
    ratingDistribution: {1: 0, 2: 0, 3: 0, 4:0, 5:0},
    verifiedPercentage: 0,
    sentimentBreakdown: { positive: 0, neutral: 0 ,negative: 0}
        });
console.log(sentimentAnalysis);