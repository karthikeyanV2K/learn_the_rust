// Problem 29: Iterator Adapters
//
// Learn: Iterator chains, composition, lazy evaluation
//
// TASK: Chain multiple iterator operations

fn main() {
    let nums = vec![1, 2, 3, 4, 5, 6];
    
    // TODO: Filter even, square them, collect
    // let result: Vec<i32> = nums.iter()
    //     .filter(|&&x| x % 2 == 0)
    //     .map(|&x| x * x)
    //     .collect();
    // println!("Result: {:?}", result);
    
    // KEY LEARNING:
    // - Iterators are lazy (don't run until collected)
    // - .iter() borrows elements
    // - .filter() keeps matching elements
    // - .map() transforms elements
    // - Chain multiple operations
    // - .collect() forces evaluation
    
    // BONUS CHALLENGES:
    // 1. Use .take() to limit results: .take(3)
    // 2. Use .skip() to skip elements: .skip(2)
    // 3. Use .zip() to combine iterators
    // 4. Use .fold() for accumulation
    // 5. Use .any() and .all() for boolean checks
    // 6. Chaining example:
    //    nums.iter()
    //        .filter(|&&x| x > 2)
    //        .map(|&x| x * 10)
    //        .take(2)
    //        .collect::<Vec<_>>()
}

/*
Expected Output:
Result: [4, 16, 36]
*/
