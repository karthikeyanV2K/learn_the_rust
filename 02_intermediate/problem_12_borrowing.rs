// Problem 12: Borrowing
//
// Learn: References, borrowing
//
// TASK: Use references instead of moving ownership

// TODO: Write function that takes a reference
fn print_length(s: &String) {
    // println!("Length: {}", s.len());
}

fn main() {
    // TODO: Create a String
    let s = String::from("hello");
    
    // TODO: Call print_length with a reference
    // print_length(&s);
    
    // TODO: Print s again - it's still valid!
    // println!("s is still valid: {}", s);
    
    // KEY LEARNING:
    // - &T creates an immutable reference
    // - Reference doesn't take ownership
    // - Original value stays valid
    // - Can have MANY immutable references to same data
    
    // BONUS CHALLENGES:
    // 1. Create multiple references and use them all
    // 2. Pass reference to multiple functions
    // 3. Try printing reference directly: println!("{:?}", &s);
}

/*
Expected Output:
Length: 5
s is still valid: hello
*/
