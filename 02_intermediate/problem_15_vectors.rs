// Problem 15: Vector Collections
//
// Learn: Vec, dynamic-size collections
//
// TASK: Create and manipulate vectors

fn main() {
    // TODO: Create vector with macro
    let mut vec = vec![1, 2, 3];
    
    // TODO: Add elements
    // vec.push(4);
    // vec.push(5);
    
    // TODO: Iterate and print
    // for num in &vec {
    //     println!("{}", num);
    // }
    
    // TODO: Print length
    // println!("Length: {}", vec.len());
    
    // KEY LEARNING:
    // - Vec<T> is growable array
    // - Use vec![] macro to create
    // - .push() adds element
    // - .pop() removes last element
    // - .len() gets size
    // - Index with [n]: vec[0]
    
    // BONUS CHALLENGES:
    // 1. Access element with get(): vec.get(0)
    // 2. Iterate with .iter() in for loop
    // 3. Collect results: let doubled: Vec<_> = vec.iter().map(|x| x*2).collect();
    // 4. Use Vec methods: .contains(), .remove(), .clear()
}

/*
Expected Output:
1
2
3
4
5
Length: 5
*/
