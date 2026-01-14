// Problem 28: Enum with Associated Data
//
// Learn: Enums with data, pattern matching
//
// TASK: Use enums to represent different types of data

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    Color(i32, i32, i32),
}

// TODO: Write function to process messages
fn process_message(msg: Message) {
    // match msg {
    //     Message::Quit => println!("Quit"),
    //     Message::Move { x, y } => println!("Move to ({}, {})", x, y),
    //     Message::Write(text) => println!("Write: {}", text),
    //     Message::Color(r, g, b) => println!("Color: RGB({}, {}, {})", r, g, b),
    // }
}

fn main() {
    // TODO: Create and process different messages
    process_message(Message::Move { x: 10, y: 20 });
    process_message(Message::Write("Hello".to_string()));
    // process_message(Message::Color(255, 0, 0));
    // process_message(Message::Quit);
    
    // KEY LEARNING:
    // - Enum variants can have different data
    // - Some variants have no data: Quit
    // - Some have tuples: Color(i32, i32, i32)
    // - Some have structs: Move { x, y }
    // - Pattern match to extract data
    
    // BONUS CHALLENGES:
    // 1. Store messages in Vec<Message>
    // 2. Add impl block with methods on Message
    // 3. Create your own enum with mixed variants
}

/*
Expected Output:
Move to (10, 20)
Write: Hello
Color: RGB(255, 0, 0)
Quit
*/
