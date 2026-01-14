// Problem 23: Generic Functions
//
// Learn: Generics, type parameters, trait bounds
//
// TASK: Write functions that work with any type

// TODO: Write generic largest function
// fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
//     let mut largest = list[0];
//     
//     for &item in list {
//         if item > largest {
//             largest = item;
//         }
//     }
//     
//     largest
// }

fn main() {
    // TODO: Test with numbers
    let numbers = vec![34, 50, 25, 100, 65];
    // println!("Largest number: {}", largest(&numbers));
    
    // TODO: Test with chars
    let chars = vec!['y', 'm', 'a', 'q'];
    // println!("Largest char: {}", largest(&chars));
    
    // KEY LEARNING:
    // - <T> is type parameter
    // - T can be ANY type, initially
    // - Trait bounds: T: PartialOrd + Copy
    // - PartialOrd allows comparison (>)
    // - Copy allows copying (for numbers, chars)
    
    // BONUS CHALLENGES:
    // 1. Remove Copy bound and see error
    // 2. Write generic swap function
    // 3. Multiple type parameters: fn two_types<T, U>(a: T, b: U)
    // 4. Generic struct: struct Point<T> { x: T, y: T }
}

/*
Expected Output:
Largest number: 100
Largest char: y
*/
