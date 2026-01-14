// Problem 34: Concurrency - Threads
//
// Learn: Thread spawning, joining, closure capture
//
// TASK: Create and coordinate threads

use std::thread;
use std::time::Duration;

fn main() {
    // TODO: Spawn thread with closure
    // let handle = thread::spawn(|| {
    //     for i in 1..3 {
    //         println!("From thread: {}", i);
    //         thread::sleep(Duration::from_millis(100));
    //     }
    // });
    
    // TODO: Main thread work
    // for i in 1..3 {
    //     println!("From main: {}", i);
    //     thread::sleep(Duration::from_millis(100));
    // }
    
    // TODO: Wait for thread to finish
    // handle.join().unwrap();
    
    // KEY LEARNING:
    // - thread::spawn() creates new thread
    // - Closure runs in new thread
    // - .join() blocks until thread finishes
    // - Threads interleave execution
    // - Useful for parallel work
    
    // BONUS CHALLENGES:
    // 1. Spawn multiple threads
    // 2. Collect handles in Vec
    // 3. Join all threads with loop
    // 4. Thread panic handling with unwrap
}

/*
Expected Output: (interleaved)
From main: 1
From thread: 1
From main: 2
From thread: 2
(From main: 3)
*/
