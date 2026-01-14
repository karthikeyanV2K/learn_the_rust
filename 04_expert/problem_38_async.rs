// Problem 38: Async/Await Basics
//
// Learn: Async functions, await, futures
//
// TASK: Write async code for concurrent operations

// Requires Cargo.toml with: tokio = { version = "1", features = ["full"] }

// TODO: Write async function
async fn fetch_data(id: i32) -> String {
    // Simulate async operation
    format!("Data for ID: {}", id)
}

// TODO: Main async function
#[tokio::main]
async fn main() {
    // TODO: Await async function
    let result = fetch_data(42).await;
    println!("{}", result);
    
    // KEY LEARNING:
    // - async fn returns Future
    // - .await blocks until future completes
    // - Non-blocking concurrency
    // - Efficient for many concurrent tasks
    // - Requires tokio runtime
    
    // BONUS CHALLENGES:
    // 1. Multiple concurrent operations with tokio::join!
    // 2. tokio::spawn for background tasks
    // 3. .timeout() for operations
    // 4. Understand: Futures vs Threads
}

/*
Expected Output:
Data for ID: 42
*/
