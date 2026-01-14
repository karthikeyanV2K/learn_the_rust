// Problem 24: Closures
//
// Learn: Closures, anonymous functions, functional programming
//
// TASK: Use closures with iterator adapters

fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    
    // TODO: Double each number with map
    // let doubled: Vec<i32> = nums.iter()
    //     .map(|x| x * 2)
    //     .collect();
    // println!("Doubled: {:?}", doubled);
    
    // TODO: Filter and sum
    // let sum: i32 = nums.iter()
    //     .filter(|&&x| x > 2)
    //     .sum();
    // println!("Sum of values > 2: {}", sum);
    
    // KEY LEARNING:
    // - |x| x * 2 is closure syntax
    // - Closures capture environment
    // - .map() transforms each element
    // - .filter() keeps matching elements
    // - .collect() gathers into collection
    // - Chain operations for powerful transformations
    
    // BONUS CHALLENGES:
    // 1. Store closure in variable: let double = |x| x * 2;
    // 2. Closure that captures variable from scope
    // 3. Use .find() to get first matching element
    // 4. Chain: .map().filter().map()
    // 5. Use .fold() for accumulation
}

/*
Expected Output:
Doubled: [2, 4, 6, 8, 10]
Sum of values > 2: 12
*/
