// Problem 18: Result Type
//
// Learn: Result enum, error handling
//
// TASK: Use Result for recoverable errors

// TODO: Write function returning Result
fn parse_number(s: &str) -> Result<i32, String> {
    // match s.parse::<i32>() {
    //     Ok(num) => Ok(num),
    //     Err(_) => Err(String::from("Not a valid number")),
    // }
}

fn main() {
    // TODO: Call parse_number("42") and match result
    // match parse_number("42") {
    //     Ok(n) => println!("Parsed: {}", n),
    //     Err(e) => println!("Error: {}", e),
    // }
    
    // TODO: Call parse_number("abc") and see error handling
    
    // KEY LEARNING:
    // - Result<T, E> = Ok(T) or Err(E)
    // - For functions that might fail
    // - Compiler forces error handling
    // - Better than panicking!
    
    // BONUS CHALLENGES:
    // 1. Use ? operator: let n = s.parse::<i32>()?;
    // 2. Use .map_err() to transform errors
    // 3. Use .unwrap_or_else()
    // 4. Propagate errors with ? in another function
}

/*
Expected Output:
Parsed: 42
Error: Not a valid number
*/
