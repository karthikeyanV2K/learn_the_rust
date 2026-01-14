// Problem 40: Unsafe and FFI
//
// Learn: Unsafe code, when and how to use
//
// TASK: Use unsafe code carefully

// TODO: Unsafe function
unsafe fn unsafe_divide(a: i32, b: i32) -> i32 {
    a / b
}

fn main() {
    // TODO: Call unsafe function in unsafe block
    let result = unsafe {
        unsafe_divide(10, 2)
    };
    // println!("Result: {}", result);
    
    // KEY LEARNING:
    // - unsafe keyword disables Rust safety checks
    // - ONLY use when absolutely necessary
    // - Document safety requirements clearly
    // - Dangerous operations:
    //   - Dereferencing raw pointers (*const T, *mut T)
    //   - Calling unsafe functions
    //   - Accessing mutable static variables
    //   - Implementing unsafe traits
    
    // BONUS CHALLENGES:
    // 1. Raw pointers: let ptr = &x as *const i32;
    // 2. Dereference: *ptr
    // 3. Understand: Rust can't verify safety in unsafe
    // 4. When should you use unsafe? (rarely!)
}

/*
Expected Output:
Result: 5
*/
