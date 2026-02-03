// Q2: Handle errors with try/catch
console.log("\nQ2: Add error handling to this async function");

// Add try/catch:

async function fetchData() {
    try {
        const response = await fetch("https://api.github.com/users/arjuthp");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Success:", data);
        return data;
        
    } catch (error) {
        console.log("Error fetching data:", error.message);
        throw error;
    }
}

// Test it
fetchData();

