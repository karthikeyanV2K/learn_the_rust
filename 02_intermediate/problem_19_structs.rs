// Problem 19: Struct Definition
//
// Learn: Structs, custom data types
//
// TASK: Define and use a Rectangle struct

// TODO: Define Rectangle struct
struct Rectangle {
    // width: u32,
    // height: u32,
}

fn main() {
    // TODO: Create Rectangle instance
    let rect = Rectangle {
        width: 30,
        height: 50,
    };
    
    // TODO: Print width and height
    // println!("Width: {}, Height: {}", rect.width, rect.height);
    
    // TODO: Calculate area
    // println!("Area: {}", rect.width * rect.height);
    
    // KEY LEARNING:
    // - struct defines custom type
    // - Fields have names and types
    // - Create with field initializer syntax
    // - Access fields with dot notation
    
    // BONUS CHALLENGES:
    // 1. Add more fields: color, depth, etc.
    // 2. Calculate perimeter
    // 3. Modify field: rect.width = 40;
    // 4. Create multiple instances
    // 5. Derive Debug: #[derive(Debug)] struct Rectangle { ... }
    //    Then: println!("{:?}", rect);
}

/*
Expected Output:
Width: 30, Height: 50
Area: 1500
*/
