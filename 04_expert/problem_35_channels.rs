// Problem 35: Message Passing - Channels
//
// Learn: Channels, thread communication, ownership transfer
//
// TASK: Send messages between threads

use std::sync::mpsc;
use std::thread;

fn main() {
    // TODO: Create channel
    let (tx, rx) = mpsc::channel();
    
    // TODO: Spawn thread that sends message
    thread::spawn(move || {
        // TODO: Send message
        // tx.send("Hello from thread").unwrap();
    });
    
    // TODO: Receive message
    // let message = rx.recv().unwrap();
    // println!("Received: {}", message);
    
    // KEY LEARNING:
    // - mpsc = multi-producer, single-consumer
    // - tx = transmitter (sender)
    // - rx = receiver
    // - .send() transfers ownership to channel
    // - .recv() blocks until message received
    // - move closure captures tx
    
    // BONUS CHALLENGES:
    // 1. Multiple senders: mpsc::Sender::clone()
    // 2. Send multiple messages
    // 3. Use try_recv() (non-blocking)
    // 4. Send different types
}

/*
Expected Output:
Received: Hello from thread
*/
