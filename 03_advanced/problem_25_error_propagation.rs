// Problem 25: Error Propagation with ?
//
// Learn: ? operator, error handling patterns
//
// TASK: Propagate errors elegantly

// TODO: Write function using ? operator
fn parse_and_double(s: &str) -> Result<i32, String> {
    // let num = s.parse::<i32>()
    //     .map_err(|_| "Failed to parse".to_string())?;
    // Ok(num * 2)
}

fn main() {
    // TODO: Call and match result
    match parse_and_double("21") {
        Ok(n) => println!("Result: {}", n),
        Err(e) => println!("Error: {}", e),
    }
    
    match parse_and_double("abc") {
        Ok(n) => println!("Result: {}", n),
        Err(e) => println!("Error: {}", e),
    }
    
    // KEY LEARNING:
    // - ? returns error early
    // - Much cleaner than nested matches
    // - Only works in functions returning Result/Option
    // - .map_err() transforms error type
    
    // BONUS CHALLENGES:
    // 1. Remove ? and use nested match
    // 2. Understand: ? = match expr { Ok(v) => v, Err(e) => return Err(e) }
    // 3. Write function that calls parse_and_double with ?
    // 4. Chain multiple ? operations
}

/*
Expected Output:
Result: 42
Error: Failed to parse
*/
