// Problem 39: Derive Macros
//
// Learn: Derived traits, #[derive] attribute
//
// TASK: Use derive to generate trait implementations

// TODO: Add derive attributes
#[derive(Clone, Debug)]
struct Person {
    name: String,
    age: u32,
}

fn main() {
    // TODO: Create person
    let person = Person {
        name: "Alice".to_string(),
        age: 30,
    };
    
    // TODO: Clone (from Clone derive)
    let cloned = person.clone();
    
    // TODO: Debug print (from Debug derive)
    // println!("{:?}", cloned);
    
    // KEY LEARNING:
    // - #[derive(Trait)] generates implementations
    // - Common: Clone, Debug, PartialEq, Eq, Hash, Copy
    // - Saves writing boilerplate
    // - Only works for types without special rules
    
    // BONUS CHALLENGES:
    // 1. Add more derives: PartialEq, Eq, Hash
    // 2. Derive Copy (must have no non-Copy fields)
    // 3. Pretty print with {:#?}
    // 4. Create custom derive macro (advanced!)
}

/*
Expected Output:
Person { name: "Alice", age: 30 }
*/
