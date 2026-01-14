// Problem 32: Reference Counting - Rc
//
// Learn: Rc, shared ownership, multiple references
//
// TASK: Share data between multiple owners

use std::rc::Rc;

fn main() {
    // TODO: Create Rc with data
    let data = Rc::new(vec![1, 2, 3]);
    
    // TODO: Clone to create multiple references
    // let ref1 = Rc::clone(&data);
    // let ref2 = Rc::clone(&data);
    
    // TODO: Use all references
    // println!("ref1: {:?}", ref1);
    // println!("ref2: {:?}", ref2);
    // println!("Strong count: {}", Rc::strong_count(&data));
    
    // KEY LEARNING:
    // - Rc<T> = Reference Counted
    // - Multiple readers, single logical owner
    // - Rc::clone() increments reference count
    // - Drop decrements count, deallocates at 0
    // - NOT thread-safe (use Arc for threads)
    
    // BONUS CHALLENGES:
    // 1. Print strong count at different points
    // 2. Use weak references: Rc::downgrade()
    // 3. Create tree structure with Rc
    // 4. Understand cycle prevention with Weak
}

/*
Expected Output:
ref1: [1, 2, 3]
ref2: [1, 2, 3]
Strong count: 3
*/
