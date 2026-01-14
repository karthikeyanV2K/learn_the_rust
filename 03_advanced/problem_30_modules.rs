// Problem 30: Module System
//
// Learn: Modules, visibility, code organization
//
// TASK: Organize code with modules

// TODO: Create math module
mod math {
    // TODO: Write pub fn add
    // pub fn add(a: i32, b: i32) -> i32 {
    //     a + b
    // }
    
    // TODO: Write pub fn subtract
    // pub fn subtract(a: i32, b: i32) -> i32 {
    //     a - b
    // }
    
    // TODO: Private function (no pub)
    // fn private_helper() { }
}

fn main() {
    // TODO: Call module functions
    println!("5 + 3 = {}", math::add(5, 3));
    println!("5 - 3 = {}", math::subtract(5, 3));
    
    // KEY LEARNING:
    // - mod keyword creates module
    // - pub makes items public
    // - Private by default (encapsulation)
    // - :: accesses module items
    // - Can nest modules
    
    // BONUS CHALLENGES:
    // 1. Create nested modules: mod math { pub mod geometry { } }
    // 2. Use use statement: use math::add;
    // 3. Private module: mod internal { }
    // 4. pub struct with pub fields vs private
}

/*
Expected Output:
5 + 3 = 8
5 - 3 = 2
*/
