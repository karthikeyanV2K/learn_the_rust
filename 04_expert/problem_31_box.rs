// Problem 31: Smart Pointers - Box
//
// Learn: Box, heap allocation, recursive types
//
// TASK: Use Box for recursive data structures

// TODO: Define Node struct with Box
struct Node {
    // value: i32,
    // next: Option<Box<Node>>,
}

fn main() {
    // TODO: Create linked list node structure
    // let node = Node {
    //     value: 1,
    //     next: Some(Box::new(Node {
    //         value: 2,
    //         next: None,
    //     })),
    // };
    
    // TODO: Access values
    // println!("First: {}", node.value);
    // if let Some(ref next_node) = node.next {
    //     println!("Second: {}", next_node.value);
    // }
    
    // KEY LEARNING:
    // - Box<T> allocates on heap
    // - Enables recursive types
    // - Single ownership of heap data
    // - Automatically deallocated when dropped
    // - Used for: linked lists, trees, graphs
    
    // BONUS CHALLENGES:
    // 1. Create longer linked list
    // 2. Write function to traverse list
    // 3. Create binary tree node
    // 4. Understand: why recursion needs Box
}

/*
Expected Output:
First: 1
Second: 2
*/
