// Problem 16: HashMap Lookups
//
// Learn: HashMap, key-value storage
//
// TASK: Create and use a simple dictionary

use std::collections::HashMap;

fn main() {
    // TODO: Create HashMap
    let mut scores = HashMap::new();
    
    // TODO: Insert scores
    // scores.insert("Alice", 95);
    // scores.insert("Bob", 87);
    // scores.insert("Charlie", 92);
    
    // TODO: Get a value
    // if let Some(score) = scores.get("Alice") {
    //     println!("Alice's score: {}", score);
    // }
    
    // KEY LEARNING:
    // - HashMap::new() creates empty map
    // - .insert(key, value) adds entry
    // - .get(key) returns Option<&Value>
    // - Must handle Option with match/if let
    
    // BONUS CHALLENGES:
    // 1. Try scores.get("Unknown") - returns None
    // 2. Update value: scores.insert("Alice", 98);
    // 3. Iterate: for (name, score) in &scores
    // 4. Remove: scores.remove("Bob");
    // 5. Check if contains: scores.contains_key("Alice");
}

/*
Expected Output:
Alice's score: 95
*/
