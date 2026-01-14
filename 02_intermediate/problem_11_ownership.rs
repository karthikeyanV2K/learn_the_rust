// Problem 11: Ownership Basics
//
// Learn: Ownership, move semantics
//
// TASK: Understand how ownership works

fn main() {
    // TODO: Create a String
    let s1 = String::from("hello");
    
    // TODO: Move s1 to s2
    let s2 = s1;
    
    // TODO: Try to print s1 - this will cause an error!
    // println!("{}", s1);  // ERROR: s1 was moved
    
    // TODO: Print s2 - this works
    // println!("{}", s2);
    
    // KEY LEARNING:
    // - Each value has ONE owner at a time
    // - When you assign to another variable, ownership MOVES
    // - Original variable becomes invalid
    // - This prevents double-free bugs!
    
    // BONUS CHALLENGES:
    // 1. Comment out the s1 print and run the code
    // 2. Try: let s3 = s2; then print s3
    // 3. What about numbers? let x = 5; let y = x; - works! Why?
    //    (Hint: Copy trait for small types)
}

/*
Expected Output:
hello
*/
