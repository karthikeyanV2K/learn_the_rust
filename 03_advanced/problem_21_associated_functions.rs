// Problem 21: Associated Functions
//
// Learn: Associated functions, constructors
//
// TASK: Create constructor pattern

struct Point {
    x: i32,
    y: i32,
}

impl Point {
    // TODO: Write new function - associated function (uses ::)
    // fn new(x: i32, y: i32) -> Point {
    //     Point { x, y }
    // }
    
    // TODO: Write distance_from_origin method
    // Uses: sqrt, pow functions
    // fn distance_from_origin(&self) -> f64 {
    //     (((self.x.pow(2) + self.y.pow(2)) as f64).sqrt())
    // }
}

fn main() {
    // TODO: Create point using new function
    let p = Point::new(3, 4);
    
    // TODO: Print coordinates
    // println!("Point: ({}, {})", p.x, p.y);
    
    // TODO: Print distance
    // println!("Distance: {}", p.distance_from_origin());
    
    // KEY LEARNING:
    // - Associated functions use :: (Point::new)
    // - No &self parameter
    // - Convention: "new" is constructor
    // - Field shorthand: Point { x, y } = Point { x: x, y: y }
    
    // BONUS CHALLENGES:
    // 1. Write distance_to(&self, other: Point) method
    // 2. Create multiple points
    // 3. Write origin() associated function returning Point {0,0}
    // 4. Understand: why use associated functions vs standalone functions?
}

/*
Expected Output:
Point: (3, 4)
Distance: 5
*/
