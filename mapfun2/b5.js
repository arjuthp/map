console.log(`Question 15: Parse and Transform URL Parameters`)
console.log(`Context: You have an array of URL strings and need to extract specific information from each URL.`)
// <!-- Input:
// javascript

// Your Task: Use map to extract product IDs and create objects with id and productUrl.
// Expected Output:
// javascript
// [
//   {id: "123", productUrl: "https://example.com/product/123"},
//   {id: "456", productUrl: "https://example.com/product/456"},
//   {id: "789", productUrl: "https://example.com/product/789"},
//   {id: "321", productUrl: "https://example.com/product/321"}
// ] -->

const urls = [
  "https://example.com/product/123",
  "https://example.com/product/456",
  "https://example.com/product/789",
  "https://example.com/product/321"
]

const parsed = urls.map(url =>({
    id: url.split("/").pop(),
    producerUrl: url
}));
console.log(parsed);