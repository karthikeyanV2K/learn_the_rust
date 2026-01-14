// Problem 17: Option Type
//
// Learn: Option enum, Some/None handling
//
// TASK: Handle optional values safely

// TODO: Write function returning Option
fn divide(a: i32, b: i32) -> Option<i32> {
    // if b == 0 {
    //     None
    // } else {
    //     Some(a / b)
    // }
}

fn main() {
    // TODO: Call divide and match result
    // match divide(10, 2) {
    //     Some(result) => println!("Result: {}", result),
    //     None => println!("Cannot divide by zero"),
    // }
    
    // TODO: Call divide(10, 0)
    
    // KEY LEARNING:
    // - Option<T> = Some(T) or None
    // - Represents "value might not exist"
    // - Compiler forces you to handle None
    // - Prevents null pointer exceptions!
    
    // BONUS CHALLENGES:
    // 1. Use if let: if let Some(r) = divide(10, 2) { ... }
    // 2. Use .map(): divide(10, 2).map(|x| x * 2)
    // 3. Use .unwrap_or(): divide(10, 0).unwrap_or(0)
    // 4. Use .is_some() and .is_none()
}

/*
Expected Output:
Result: 5
Cannot divide by zero
*/
