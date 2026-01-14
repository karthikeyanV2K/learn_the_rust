// Problem 37: Trait Objects
//
// Learn: Dynamic dispatch, dyn trait, polymorphism
//
// TASK: Use trait objects for flexible collections

// TODO: Define Animal trait
trait Animal {
    // fn speak(&self);
}

// TODO: Implement for Dog
struct Dog;

impl Animal for Dog {
    // fn speak(&self) { println!("Woof!"); }
}

// TODO: Implement for Cat
struct Cat;

impl Animal for Cat {
    // fn speak(&self) { println!("Meow!"); }
}

fn main() {
    // TODO: Create vec of trait objects
    let animals: Vec<Box<dyn Animal>> = vec![
        // Box::new(Dog),
        // Box::new(Cat),
    ];
    
    // TODO: Iterate and call methods
    // for animal in animals {
    //     animal.speak();
    // }
    
    // KEY LEARNING:
    // - dyn Trait = dynamic dispatch
    // - Box<dyn Trait> = trait object on heap
    // - &dyn Trait = reference to trait object
    // - Allows heterogeneous collections
    // - Runtime polymorphism (slower than static)
    
    // BONUS CHALLENGES:
    // 1. Create more animal types
    // 2. Use &dyn Trait parameter
    // 3. Understand: static vs dynamic dispatch
    // 4. Trait methods with different signatures
}

/*
Expected Output:
Woof!
Meow!
*/
