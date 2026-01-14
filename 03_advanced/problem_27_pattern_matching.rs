// Problem 27: Pattern Matching Advanced
//
// Learn: Destructuring, pattern guards, complex patterns
//
// TASK: Use advanced pattern matching

fn main() {
    let point = (3, 4);
    
    // TODO: Match with different patterns
    match point {
        (0, 0) => println!("Origin"),
        // (x, 0) => println!("On x-axis at {}", x),
        // (0, y) => println!("On y-axis at {}", y),
        // (x, y) if x == y => println!("On diagonal at ({}, {})", x, y),
        // (x, y) => println!("At ({}, {})", x, y),
    }
    
    // KEY LEARNING:
    // - Pattern guards: match arm if condition
    // - Destructuring: (x, 0) extracts values
    // - Catch-all patterns prevent errors
    // - Patterns work in let statements too
    
    // BONUS CHALLENGES:
    // 1. Destructure struct: Point { x, y } =>
    // 2. Destructure enum variants
    // 3. Multiple patterns: (1..=3, _) =>
    // 4. Binding with @: v @ 3..=5 =>
}

/*
Expected Output:
At (3, 4)
*/
