// Problem 3: Function Factory
//
// Learn: Functions, parameters, return values
//
// TASK: Write two functions and call them

fn main() {
println!("{}",add(5,3));
println!("{}",multi(4, 6));
    // TODO: Call add(5, 3) and print result
    // TODO: Call multiply(4, 6) and print result
}

// TODO: Write the add function
// Parameters: a: i32, b: i32
// Return type: i32
// Body: return a + b

fn add(a: i32, b: i32) -> i32 {
   a+b 
}

// TODO: Write the multiply function
// Parameters: x: i32, y: i32
// Return type: i32
// Body: return x * 

fn multi(x: i32, y: i32) -> i32 {
    x * y 
}


// BONUS CHALLENGES:
// 1. Write a subtract function
// 2. Write a function that returns a bool: fn is_even(n: i32) -> bool
// 3. Try calling a function before defining it (won't work - why?)

/*
Expected Output:
5 + 3 = 8
4 * 6 = 24
*/
