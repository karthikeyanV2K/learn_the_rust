// Problem 22: Trait Definition
//
// Learn: Traits, shared behavior
//
// TASK: Define and implement traits

// TODO: Define Drawable trait
trait Drawable {
    // fn draw(&self);
    // fn area(&self) -> f64;
}

struct Circle {
    radius: f64,
}

// TODO: Implement Drawable for Circle
impl Drawable for Circle {
    // fn draw(&self) {
    //     println!("Drawing circle with radius {}", self.radius);
    // }
    
    // fn area(&self) -> f64 {
    //     3.14 * self.radius * self.radius
    // }
}

fn main() {
    // TODO: Create circle
    let circle = Circle { radius: 5.0 };
    
    // TODO: Call trait methods
    // circle.draw();
    // println!("Area: {}", circle.area());
    
    // KEY LEARNING:
    // - Trait defines shared behavior
    // - Multiple types can implement same trait
    // - Trait methods = interface contracts
    // - impl Trait for Type syntax
    
    // BONUS CHALLENGES:
    // 1. Create Square struct and implement Drawable
    // 2. Create function that accepts &dyn Drawable
    // 3. Put multiple shapes in vec![Box<dyn Drawable>]
    // 4. Write default trait method implementation
}

/*
Expected Output:
Drawing circle with radius 5
Area: 78.5
*/
