// Problem 13: Mutable References
//
// Learn: Mutable borrowing, modification through reference
//
// TASK: Modify data through mutable reference

// TODO: Write function that takes mutable reference
fn add_exclamation(s: &mut String) {
    // s.push_str("!");
}

fn main() {
    // TODO: Create mutable String
    let mut s = String::from("hello");
    
    // TODO: Call add_exclamation with mutable reference
    // add_exclamation(&mut s);
    
    // TODO: Print result
    // println!("{}", s);
    
    // KEY LEARNING:
    // - &mut T creates mutable reference
    // - Can modify data through reference
    // - ONLY ONE mutable reference at a time!
    // - Can't have mutable AND immutable refs together
    
    // BONUS CHALLENGES:
    // 1. Try having two mutable refs - compiler error!
    // 2. Try mixing immutable and mutable refs
    // 3. Understand: let mut x = 5; let r1 = &x; let r2 = &mut x;
    //    What's the error? Why does Rust do this?
}

/*
Expected Output:
hello!
*/
