// Problem 6: String Manipulation
//
// Learn: String vs &str, String methods
//
// TASK: Create and manipulate strings

fn main() {
    // TODO: Create mutable String from "Hello"
    // Use: let mut s = String::from("Hello");
    
    // TODO: Add ", Rust!" to the end
    // Use: s.push_str(", Rust!");
    
    // TODO: Print the result
    
    // TODO: Create string slice and check properties:
    let message = "Rust is awesome";
    
    // TODO: Print length
    // Use: message.len()
    
    // TODO: Print uppercase
    // Use: message.to_uppercase()
    
    // TODO: Check if contains "awesome"
    // Use: message.contains("awesome")
    
    // BONUS CHALLENGES:
    // 1. Difference between String and &str
    // 2. Try: message.split(" ").collect::<Vec<_>>()
    // 3. Reverse a string (tricky in Rust!)
    // 4. Count occurrences of a character
}

/*
Expected Output:
Hello, Rust!
Length: 15
Uppercase: RUST IS AWESOME
Contains 'awesome': true
*/
