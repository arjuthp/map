// Q7: Try/catch with finally
console.log("\nQ7: Add loading spinner with proper cleanup");
// async function uploadFile(file) {
//     showSpinner();
//     const result = await upload(file);
//     hideSpinner();
//     return result;
// }
// Use try/catch/finally to ensure spinner always hides:

const showSpinner = () => console.log("Loading...");
const hideSpinner = () => console.log("DOne");
const upload = () => new Promise  (resolve => settimeout(()=> resolve("Uploaded!"), 1000 ));

async function uploadFile(file) {
    try {
        showSpinner();
        const result = await upload(file);
        return result;
    } catch (error) {
        console.log("Error:", error.message);
    }finally{
        hideSpinner();
    }
}
uploadFile("photo.jpg");