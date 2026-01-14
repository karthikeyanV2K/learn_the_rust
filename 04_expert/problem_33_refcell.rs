// Problem 33: Interior Mutability - RefCell
//
// Learn: RefCell, interior mutability, runtime checks
//
// TASK: Mutate through immutable reference

use std::cell::RefCell;

// TODO: Define Counter with RefCell
struct Counter {
    // count: RefCell<i32>,
}

impl Counter {
    // TODO: increment method (takes &self not &mut self!)
    // fn increment(&self) {
    //     *self.count.borrow_mut() += 1;
    // }
    
    // TODO: get method
    // fn get(&self) -> i32 {
    //     *self.count.borrow()
    // }
}

fn main() {
    // TODO: Create counter
    let counter = Counter { count: RefCell::new(0) };
    
    // TODO: Increment and get
    counter.increment();
    counter.increment();
    // println!("Count: {}", counter.get());
    
    // KEY LEARNING:
    // - RefCell<T> enables internal mutability
    // - Runtime borrow checking (not compile-time)
    // - .borrow() = immutable borrow
    // - .borrow_mut() = mutable borrow
    // - Panic if rules violated at runtime
    
    // BONUS CHALLENGES:
    // 1. Try multiple borrows at once
    // 2. Try borrow + borrow_mut (panics!)
    // 3. Combine Rc<RefCell<T>>
    // 4. When to use vs &mut
}

/*
Expected Output:
Count: 2
*/
