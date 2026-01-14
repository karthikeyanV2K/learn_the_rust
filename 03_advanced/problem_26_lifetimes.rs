// Problem 26: Lifetime Syntax
//
// Learn: Lifetimes, reference validity
//
// TASK: Work with lifetime annotations

// TODO: Write function with lifetime annotation
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    // if x.len() > y.len() {
    //     x
    // } else {
    //     y
    // }
}

fn main() {
    let s1 = "hello";
    let s2 = "world";
    
    // TODO: Call longest function
    let result = longest(s1, s2);
    // println!("Longest: {}", result);
    
    // KEY LEARNING:
    // - 'a is lifetime parameter (not a type!)
    // - &'a str = reference valid for 'a
    // - Compiler checks references don't outlive data
    // - Most lifetimes implicit (elision rules)
    // - Only explicit when needed
    
    // BONUS CHALLENGES:
    // 1. Write function with different lifetimes: fn func<'a, 'b>(x: &'a str, y: &'b str)
    // 2. Struct with references: struct RefHolder<'a> { ref_to: &'a str }
    // 3. Understand lifetime mismatch errors
    // 4. When to use explicit lifetimes vs implicit
}

/*
Expected Output:
Longest: hello
*/
