// Problem 36: Mutex for Shared State
//
// Learn: Mutex, thread-safe mutation, Arc
//
// TASK: Safely share mutable state between threads

use std::sync::Mutex;
use std::thread;
use std::sync::Arc;

fn main() {
    // TODO: Create mutex-wrapped counter
    let counter = Arc::new(Mutex::new(0));
    
    // TODO: Create multiple threads
    let mut handles = vec![];
    
    // for _ in 0..3 {
    //     let counter_clone = Arc::clone(&counter);
    //     let handle = thread::spawn(move || {
    //         let mut num = counter_clone.lock().unwrap();
    //         *num += 1;
    //     });
    //     handles.push(handle);
    // }
    
    // TODO: Wait for threads
    // for handle in handles {
    //     handle.join().unwrap();
    // }
    
    // TODO: Print final count
    // println!("Final count: {}", *counter.lock().unwrap());
    
    // KEY LEARNING:
    // - Mutex<T> provides mutual exclusion
    // - .lock() acquires lock (blocks until available)
    // - Arc = Atomic Reference Counted (thread-safe Rc)
    // - Arc + Mutex pattern for shared state
    // - .unwrap() panics if lock was poisoned
    
    // BONUS CHALLENGES:
    // 1. What if you don't use Arc? Compiler error!
    // 2. Understand: why Arc needed with Mutex
    // 3. Lock guard lifetime: drops when scope ends
}

/*
Expected Output:
Final count: 3
*/
