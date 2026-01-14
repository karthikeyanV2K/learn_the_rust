// Problem 20: Struct Methods
//
// Learn: impl blocks, methods
//
// TASK: Add methods to a struct

struct Rectangle {
    width: u32,
    height: u32,
}

// TODO: Create impl block for Rectangle
impl Rectangle {
    // TODO: Write area method
    // fn area(&self) -> u32 {
    //     self.width * self.height
    // }
    
    // TODO: Write perimeter method
    // fn perimeter(&self) -> u32 {
    //     2 * (self.width + self.height)
    // }
}

fn main() {
    // TODO: Create Rectangle
    let rect = Rectangle { width: 30, height: 50 };
    
    // TODO: Call area method
    // println!("Area: {}", rect.area());
    
    // TODO: Call perimeter method
    // println!("Perimeter: {}", rect.perimeter());
    
    // KEY LEARNING:
    // - impl block adds methods to struct
    // - &self = immutable reference to self
    // - &mut self = mutable reference to self
    // - Methods called with dot notation
    
    // BONUS CHALLENGES:
    // 1. Write a square method
    // 2. Add mutable method: set_width(&mut self, w: u32)
    // 3. Add associated function: Rectangle::square(size: u32) -> Rectangle
    // 4. Multiple impl blocks for same struct
}

/*
Expected Output:
Area: 1500
Perimeter: 160
*/
