/**
 * RustLab - Problem Database
 * 40 Problems across 4 difficulty levels
 */

const PROBLEMS = {
    levels: [
        // ===== BEGINNER LEVEL =====
        {
            id: 'beginner',
            name: 'Beginner',
            icon: '🌱',
            description: 'Fundamentals (Chapters 1-3)',
            problems: [
                {
                    id: 1,
                    title: 'Hello Variables',
                    concepts: ['Variables', 'Mutability', 'Printing'],
                    difficulty: '⭐',
                    starterCode: `fn main() {
    // TODO: Declare a variable x with value 5
    // TODO: Declare a mutable variable y with value 10
    // TODO: Add 5 to y
    // TODO: Print both x and y
    
}`,
                    solution: `fn main() {
    let x = 5;
    let mut y = 10;
    y = y + 5;
    println!("x = {}, y = {}", x, y);
}`,
                    expectedOutput: 'x = 5, y = 15',
                    keyLearnings: [
                        'Variables are immutable by default',
                        'Use `mut` for mutable variables',
                        'String interpolation with `println!` macro'
                    ]
                },
                {
                    id: 2,
                    title: 'Data Types Detective',
                    concepts: ['Primitive Types', 'Type Annotations'],
                    difficulty: '⭐',
                    starterCode: `fn main() {
    // TODO: Declare an i32 integer with value 42
    // TODO: Declare an f64 float with value 3.14
    // TODO: Declare a bool with value true
    // TODO: Declare a char with value 'R'
    // TODO: Print all four values
    
}`,
                    solution: `fn main() {
    let int_val: i32 = 42;
    let float_val: f64 = 3.14;
    let bool_val: bool = true;
    let char_val: char = 'R';
    
    println!("Integer: {}", int_val);
    println!("Float: {}", float_val);
    println!("Boolean: {}", bool_val);
    println!("Character: {}", char_val);
}`,
                    expectedOutput: 'Integer: 42\nFloat: 3.14\nBoolean: true\nCharacter: R',
                    keyLearnings: [
                        'i32, f64, bool, char are primitive types',
                        'Type annotations with colons',
                        'Range of values each type can hold'
                    ]
                },
                {
                    id: 3,
                    title: 'Function Factory',
                    concepts: ['Functions', 'Parameters', 'Return Values'],
                    difficulty: '⭐',
                    starterCode: `// TODO: Create a function 'add' that takes two i32 and returns their sum
// TODO: Create a function 'multiply' that takes two i32 and returns their product

fn main() {
    println!("5 + 3 = {}", add(5, 3));
    println!("4 * 6 = {}", multiply(4, 6));
}`,
                    solution: `fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn multiply(x: i32, y: i32) -> i32 {
    x * y
}

fn main() {
    println!("5 + 3 = {}", add(5, 3));
    println!("4 * 6 = {}", multiply(4, 6));
}`,
                    expectedOutput: '5 + 3 = 8\n4 * 6 = 24',
                    keyLearnings: [
                        'Function syntax: `fn name(param: type) -> return_type`',
                        'Return values (implicit with last expression)',
                        'Function calls'
                    ]
                },
                {
                    id: 4,
                    title: 'Loop Master',
                    concepts: ['For Loop', 'While Loop', 'Ranges'],
                    difficulty: '⭐',
                    starterCode: `fn main() {
    // TODO: Use a for loop to print numbers 1 to 5
    println!("For loop (1-5):");
    
    // TODO: Use a while loop to countdown from 3 to 1
    println!("\\nWhile loop (countdown from 3):");
    
    println!("Blastoff!");
}`,
                    solution: `fn main() {
    // For loop
    println!("For loop (1-5):");
    for i in 1..=5 {
        println!("{}", i);
    }
    
    // While loop
    println!("\\nWhile loop (countdown from 3):");
    let mut count = 3;
    while count > 0 {
        println!("{}", count);
        count -= 1;
    }
    println!("Blastoff!");
}`,
                    expectedOutput: 'For loop (1-5):\n1\n2\n3\n4\n5\n\nWhile loop (countdown from 3):\n3\n2\n1\nBlastoff!',
                    keyLearnings: [
                        '`for..in` loops with ranges (1..5 is exclusive, 1..=5 is inclusive)',
                        '`while` loops with conditions',
                        'Range notation'
                    ]
                },
                {
                    id: 5,
                    title: 'If-Else Logic',
                    concepts: ['Conditionals', 'Boolean Logic'],
                    difficulty: '⭐',
                    starterCode: `fn main() {
    let number = 42;
    
    // TODO: Check if number is positive, negative, or zero
    // TODO: Check if number is even or odd (use if as expression)
    
}`,
                    solution: `fn main() {
    let number = 42;
    
    if number > 0 {
        println!("{} is positive", number);
    } else if number < 0 {
        println!("{} is negative", number);
    } else {
        println!("{} is zero", number);
    }
    
    // if as expression
    let status = if number % 2 == 0 {
        "even"
    } else {
        "odd"
    };
    println!("{} is {}", number, status);
}`,
                    expectedOutput: '42 is positive\n42 is even',
                    keyLearnings: [
                        'if-else chains',
                        'if as an expression (returns value)',
                        'Comparison operators'
                    ]
                },
                {
                    id: 6,
                    title: 'String Manipulation',
                    concepts: ['String', '&str', 'String Methods'],
                    difficulty: '⭐',
                    starterCode: `fn main() {
    // TODO: Create a String and append ", Rust!" to "Hello"
    // TODO: Get length, uppercase, and check if contains "awesome"
    
}`,
                    solution: `fn main() {
    let mut s = String::from("Hello");
    s.push_str(", Rust!");
    println!("{}", s);
    
    let message = "Rust is awesome";
    println!("Length: {}", message.len());
    println!("Uppercase: {}", message.to_uppercase());
    println!("Contains 'awesome': {}", message.contains("awesome"));
}`,
                    expectedOutput: 'Hello, Rust!\nLength: 15\nUppercase: RUST IS AWESOME\nContains \'awesome\': true',
                    keyLearnings: [
                        '`String::from()` for owned strings',
                        '`&str` string slices',
                        'String methods: push_str, len, to_uppercase, contains'
                    ]
                },
                {
                    id: 7,
                    title: 'Array Basics',
                    concepts: ['Arrays', 'Fixed-size Collections'],
                    difficulty: '⭐',
                    starterCode: `fn main() {
    // TODO: Create an array with [1, 2, 3, 4, 5]
    // TODO: Print the array, its length, first element, and sum
    
}`,
                    solution: `fn main() {
    let arr = [1, 2, 3, 4, 5];
    println!("Array: {:?}", arr);
    println!("Length: {}", arr.len());
    println!("First element: {}", arr[0]);
    println!("Sum: {}", arr.iter().sum::<i32>());
}`,
                    expectedOutput: 'Array: [1, 2, 3, 4, 5]\nLength: 5\nFirst element: 1\nSum: 15',
                    keyLearnings: [
                        'Array syntax: [element; count]',
                        'Indexing with [n]',
                        '.len() method',
                        '.iter().sum() for aggregation'
                    ]
                },
                {
                    id: 8,
                    title: 'Tuple Time',
                    concepts: ['Tuples', 'Destructuring'],
                    difficulty: '⭐',
                    starterCode: `fn main() {
    // TODO: Create a tuple with ("Alice", 25, 5.9)
    // TODO: Access elements by index
    // TODO: Destructure the tuple
    
}`,
                    solution: `fn main() {
    let person = ("Alice", 25, 5.9);
    println!("Name: {}, Age: {}, Height: {}", person.0, person.1, person.2);
    
    let (name, age, height) = person;
    println!("Destructured: {} is {} years old", name, age);
}`,
                    expectedOutput: 'Name: Alice, Age: 25, Height: 5.9\nDestructured: Alice is 25 years old',
                    keyLearnings: [
                        'Tuple syntax: (type1, type2, type3)',
                        'Tuple indexing with .0, .1, etc.',
                        'Destructuring assignment'
                    ]
                },
                {
                    id: 9,
                    title: 'Match Statement',
                    concepts: ['Pattern Matching', 'Match Expressions'],
                    difficulty: '⭐⭐',
                    starterCode: `fn main() {
    let day = 3;
    
    // TODO: Use match to print the day of the week
    // 1=Monday, 2=Tuesday, 3=Wednesday, etc.
    // 6|7 should print "Weekend!"
    // _ for invalid day
    
}`,
                    solution: `fn main() {
    let day = 3;
    
    match day {
        1 => println!("Monday"),
        2 => println!("Tuesday"),
        3 => println!("Wednesday"),
        4 => println!("Thursday"),
        5 => println!("Friday"),
        6 | 7 => println!("Weekend!"),
        _ => println!("Invalid day"),
    }
}`,
                    expectedOutput: 'Wednesday',
                    keyLearnings: [
                        '`match` expression for pattern matching',
                        'Multiple patterns with |',
                        'Default case with _',
                        'Match is exhaustive'
                    ]
                },
                {
                    id: 10,
                    title: 'Enum Basics',
                    concepts: ['Enums', 'Custom Types'],
                    difficulty: '⭐⭐',
                    starterCode: `// TODO: Define a Color enum with Red, Green, Blue variants

fn main() {
    // TODO: Create a Color::Red and match on it
    
}`,
                    solution: `enum Color {
    Red,
    Green,
    Blue,
}

fn main() {
    let color = Color::Red;
    
    match color {
        Color::Red => println!("Stop!"),
        Color::Green => println!("Go!"),
        Color::Blue => println!("Cool!"),
    }
}`,
                    expectedOutput: 'Stop!',
                    keyLearnings: [
                        'Enum definition',
                        'Enum variants',
                        'Using enums with match'
                    ]
                }
            ]
        },
        // ===== INTERMEDIATE LEVEL =====
        {
            id: 'intermediate',
            name: 'Intermediate',
            icon: '⚡',
            description: 'Ownership & Data Structures (Chapters 4-8)',
            problems: [
                {
                    id: 11,
                    title: 'Ownership Basics',
                    concepts: ['Ownership', 'Move Semantics'],
                    difficulty: '⭐⭐',
                    starterCode: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // What happens to s1?
    
    // TODO: Try to understand why this line would fail:
    // println!("{}", s1);  
    
    println!("{}", s2);
}`,
                    solution: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2
    
    // println!("{}", s1);  // ERROR: s1 no longer owns the data
    println!("{}", s2);
}`,
                    expectedOutput: 'hello',
                    keyLearnings: [
                        'Values have one owner at a time',
                        'Move transfers ownership',
                        'Original variable becomes invalid after move'
                    ]
                },
                {
                    id: 12,
                    title: 'Borrowing',
                    concepts: ['References', 'Borrowing'],
                    difficulty: '⭐⭐',
                    starterCode: `// TODO: Create a function that takes a &String reference and prints its length

fn main() {
    let s = String::from("hello");
    // TODO: Call your function with &s
    println!("s is still valid: {}", s);
}`,
                    solution: `fn print_length(s: &String) {
    println!("Length: {}", s.len());
}

fn main() {
    let s = String::from("hello");
    print_length(&s);
    println!("s is still valid: {}", s);
}`,
                    expectedOutput: 'Length: 5\ns is still valid: hello',
                    keyLearnings: [
                        '&T creates an immutable reference',
                        'Borrowing doesn\'t move ownership',
                        'Can have multiple immutable references'
                    ]
                },
                {
                    id: 13,
                    title: 'Mutable References',
                    concepts: ['Mutable Borrowing'],
                    difficulty: '⭐⭐',
                    starterCode: `// TODO: Create a function that takes &mut String and adds "!"

fn main() {
    let mut s = String::from("hello");
    // TODO: Call your function
    println!("{}", s);
}`,
                    solution: `fn add_exclamation(s: &mut String) {
    s.push_str("!");
}

fn main() {
    let mut s = String::from("hello");
    add_exclamation(&mut s);
    println!("{}", s);
}`,
                    expectedOutput: 'hello!',
                    keyLearnings: [
                        '&mut T for mutable references',
                        'Only one mutable reference at a time',
                        'Can\'t have mutable and immutable refs together'
                    ]
                },
                {
                    id: 14,
                    title: 'Slice Slicing',
                    concepts: ['Slices', 'String Slices'],
                    difficulty: '⭐⭐',
                    starterCode: `fn main() {
    let s = String::from("hello world");
    
    // TODO: Create slices for "hello" and "world"
    
}`,
                    solution: `fn main() {
    let s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];
    
    println!("hello: {}", hello);
    println!("world: {}", world);
}`,
                    expectedOutput: 'hello: hello\nworld: world',
                    keyLearnings: [
                        'Slice syntax: &s[start..end]',
                        'Slices are references to part of data',
                        'Start is inclusive, end is exclusive'
                    ]
                },
                {
                    id: 15,
                    title: 'Vector Collections',
                    concepts: ['Vec', 'Dynamic Collections'],
                    difficulty: '⭐⭐',
                    starterCode: `fn main() {
    // TODO: Create a vector with vec![1, 2, 3]
    // TODO: Push 4 and 5
    // TODO: Iterate and print each number
    // TODO: Print the length
    
}`,
                    solution: `fn main() {
    let mut vec = vec![1, 2, 3];
    
    vec.push(4);
    vec.push(5);
    
    for num in &vec {
        println!("{}", num);
    }
    
    println!("Length: {}", vec.len());
}`,
                    expectedOutput: '1\n2\n3\n4\n5\nLength: 5',
                    keyLearnings: [
                        'vec![] macro for vector creation',
                        '.push() to add elements',
                        'Iterate with for..in'
                    ]
                },
                {
                    id: 16,
                    title: 'HashMap Lookups',
                    concepts: ['HashMap', 'Key-Value Stores'],
                    difficulty: '⭐⭐',
                    starterCode: `use std::collections::HashMap;

fn main() {
    // TODO: Create a HashMap and insert scores for Alice, Bob, Charlie
    // TODO: Get and print Alice's score
    
}`,
                    solution: `use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    
    scores.insert("Alice", 95);
    scores.insert("Bob", 87);
    scores.insert("Charlie", 92);
    
    if let Some(score) = scores.get("Alice") {
        println!("Alice's score: {}", score);
    }
}`,
                    expectedOutput: 'Alice\'s score: 95',
                    keyLearnings: [
                        'HashMap::new() creates empty map',
                        '.insert(key, value) adds entries',
                        '.get(key) returns Option',
                        'Use if let for Option handling'
                    ]
                },
                {
                    id: 17,
                    title: 'Option Type',
                    concepts: ['Option Enum', 'Some/None'],
                    difficulty: '⭐⭐',
                    starterCode: `// TODO: Create a divide function that returns Option<i32>
// Return None if dividing by zero

fn main() {
    // TODO: Call divide(10, 2) and divide(10, 0)
    // TODO: Handle both cases with match
    
}`,
                    solution: `fn divide(a: i32, b: i32) -> Option<i32> {
    if b == 0 {
        None
    } else {
        Some(a / b)
    }
}

fn main() {
    match divide(10, 2) {
        Some(result) => println!("Result: {}", result),
        None => println!("Cannot divide by zero"),
    }
    
    match divide(10, 0) {
        Some(result) => println!("Result: {}", result),
        None => println!("Cannot divide by zero"),
    }
}`,
                    expectedOutput: 'Result: 5\nCannot divide by zero',
                    keyLearnings: [
                        'Option<T> represents Some or None',
                        'Must handle None case',
                        'Use match for comprehensive handling'
                    ]
                },
                {
                    id: 18,
                    title: 'Result Type',
                    concepts: ['Result Enum', 'Error Handling'],
                    difficulty: '⭐⭐',
                    starterCode: `// TODO: Create a parse_number function that returns Result<i32, String>

fn main() {
    // TODO: Call with "42" and handle Ok/Err
    
}`,
                    solution: `fn parse_number(s: &str) -> Result<i32, String> {
    match s.parse::<i32>() {
        Ok(num) => Ok(num),
        Err(_) => Err(String::from("Not a valid number")),
    }
}

fn main() {
    match parse_number("42") {
        Ok(n) => println!("Parsed: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}`,
                    expectedOutput: 'Parsed: 42',
                    keyLearnings: [
                        'Result<T, E> represents Ok or Err',
                        'Use for functions that might fail',
                        'Pattern match to handle both cases'
                    ]
                },
                {
                    id: 19,
                    title: 'Struct Definition',
                    concepts: ['Structs', 'Custom Data Types'],
                    difficulty: '⭐⭐',
                    starterCode: `// TODO: Define a Rectangle struct with width and height

fn main() {
    // TODO: Create a Rectangle and print its dimensions and area
    
}`,
                    solution: `struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect = Rectangle {
        width: 30,
        height: 50,
    };
    
    println!("Width: {}, Height: {}", rect.width, rect.height);
    println!("Area: {}", rect.width * rect.height);
}`,
                    expectedOutput: 'Width: 30, Height: 50\nArea: 1500',
                    keyLearnings: [
                        'Struct syntax with named fields',
                        'Create instances with field initializer',
                        'Access fields with dot notation'
                    ]
                },
                {
                    id: 20,
                    title: 'Struct Methods',
                    concepts: ['impl Blocks', 'Methods'],
                    difficulty: '⭐⭐',
                    starterCode: `struct Rectangle {
    width: u32,
    height: u32,
}

// TODO: Add impl block with area() and perimeter() methods

fn main() {
    let rect = Rectangle { width: 30, height: 50 };
    println!("Area: {}", rect.area());
    println!("Perimeter: {}", rect.perimeter());
}`,
                    solution: `struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    
    fn perimeter(&self) -> u32 {
        2 * (self.width + self.height)
    }
}

fn main() {
    let rect = Rectangle { width: 30, height: 50 };
    println!("Area: {}", rect.area());
    println!("Perimeter: {}", rect.perimeter());
}`,
                    expectedOutput: 'Area: 1500\nPerimeter: 160',
                    keyLearnings: [
                        'impl block for methods',
                        '&self for immutable methods',
                        'Method calls with dot notation'
                    ]
                }
            ]
        },
        // ===== ADVANCED LEVEL =====
        {
            id: 'advanced',
            name: 'Advanced',
            icon: '🚀',
            description: 'Advanced Concepts (Chapters 9-13)',
            problems: [
                {
                    id: 21,
                    title: 'Associated Functions',
                    concepts: ['Associated Functions', 'Constructors'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `struct Point {
    x: i32,
    y: i32,
}

// TODO: Add Point::new() and distance_from_origin() method

fn main() {
    let p = Point::new(3, 4);
    println!("Point: ({}, {})", p.x, p.y);
    println!("Distance: {}", p.distance_from_origin());
}`,
                    solution: `struct Point {
    x: i32,
    y: i32,
}

impl Point {
    fn new(x: i32, y: i32) -> Point {
        Point { x, y }
    }
    
    fn distance_from_origin(&self) -> f64 {
        (((self.x.pow(2) + self.y.pow(2)) as f64).sqrt())
    }
}

fn main() {
    let p = Point::new(3, 4);
    println!("Point: ({}, {})", p.x, p.y);
    println!("Distance: {}", p.distance_from_origin());
}`,
                    expectedOutput: 'Point: (3, 4)\nDistance: 5',
                    keyLearnings: [
                        'Associated functions use ::',
                        'new is convention for constructors',
                        'Self and field shorthand'
                    ]
                },
                {
                    id: 22,
                    title: 'Trait Definition',
                    concepts: ['Traits', 'Shared Behavior'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `// TODO: Define a Drawable trait with draw() and area() methods
// TODO: Implement Drawable for Circle struct

fn main() {
    let circle = Circle { radius: 5.0 };
    circle.draw();
    println!("Area: {}", circle.area());
}`,
                    solution: `trait Drawable {
    fn draw(&self);
    fn area(&self) -> f64;
}

struct Circle {
    radius: f64,
}

impl Drawable for Circle {
    fn draw(&self) {
        println!("Drawing circle with radius {}", self.radius);
    }
    
    fn area(&self) -> f64 {
        3.14 * self.radius * self.radius
    }
}

fn main() {
    let circle = Circle { radius: 5.0 };
    circle.draw();
    println!("Area: {}", circle.area());
}`,
                    expectedOutput: 'Drawing circle with radius 5\nArea: 78.5',
                    keyLearnings: [
                        'Trait definition with required methods',
                        'impl Trait for Type syntax',
                        'Traits define shared interface'
                    ]
                },
                {
                    id: 23,
                    title: 'Generic Functions',
                    concepts: ['Generics', 'Type Parameters'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `// TODO: Write a generic function 'largest' that works with any PartialOrd + Copy type

fn main() {
    let numbers = vec![34, 50, 25, 100, 65];
    println!("Largest number: {}", largest(&numbers));
    
    let chars = vec!['y', 'm', 'a', 'q'];
    println!("Largest char: {}", largest(&chars));
}`,
                    solution: `fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];
    
    for &item in list {
        if item > largest {
            largest = item;
        }
    }
    
    largest
}

fn main() {
    let numbers = vec![34, 50, 25, 100, 65];
    println!("Largest number: {}", largest(&numbers));
    
    let chars = vec!['y', 'm', 'a', 'q'];
    println!("Largest char: {}", largest(&chars));
}`,
                    expectedOutput: 'Largest number: 100\nLargest char: y',
                    keyLearnings: [
                        '<T> generic type parameter',
                        'Trait bounds with :',
                        'Generics for code reuse'
                    ]
                },
                {
                    id: 24,
                    title: 'Closures',
                    concepts: ['Closures', 'Anonymous Functions'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    
    // TODO: Use map() to double each number
    // TODO: Use filter() to get sum of numbers > 2
    
}`,
                    solution: `fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    
    let doubled: Vec<i32> = nums.iter()
        .map(|x| x * 2)
        .collect();
    
    println!("Doubled: {:?}", doubled);
    
    let sum: i32 = nums.iter()
        .filter(|&&x| x > 2)
        .sum();
    
    println!("Sum of values > 2: {}", sum);
}`,
                    expectedOutput: 'Doubled: [2, 4, 6, 8, 10]\nSum of values > 2: 12',
                    keyLearnings: [
                        'Closure syntax: |param| body',
                        '.map() transforms elements',
                        '.filter() selects elements',
                        '.collect() into collection'
                    ]
                },
                {
                    id: 25,
                    title: 'Error Handling with ?',
                    concepts: ['? Operator', 'Error Propagation'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `// TODO: Create parse_and_double that uses ? operator

fn main() {
    match parse_and_double("21") {
        Ok(n) => println!("Result: {}", n),
        Err(e) => println!("Error: {}", e),
    }
    
    match parse_and_double("abc") {
        Ok(n) => println!("Result: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}`,
                    solution: `fn parse_and_double(s: &str) -> Result<i32, String> {
    let num = s.parse::<i32>()
        .map_err(|_| "Failed to parse".to_string())?;
    Ok(num * 2)
}

fn main() {
    match parse_and_double("21") {
        Ok(n) => println!("Result: {}", n),
        Err(e) => println!("Error: {}", e),
    }
    
    match parse_and_double("abc") {
        Ok(n) => println!("Result: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}`,
                    expectedOutput: 'Result: 42\nError: Failed to parse',
                    keyLearnings: [
                        '? operator returns error early',
                        '.map_err() transforms error type',
                        'Cleaner than nested match statements'
                    ]
                },
                {
                    id: 26,
                    title: 'Lifetime Syntax',
                    concepts: ['Lifetimes', 'Borrow Semantics'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `// TODO: Create a function that returns the longest of two string slices
// Hint: You need lifetime annotations

fn main() {
    let s1 = "hello";
    let s2 = "world";
    let result = longest(s1, s2);
    println!("Longest: {}", result);
}`,
                    solution: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = "hello";
    let s2 = "world";
    let result = longest(s1, s2);
    println!("Longest: {}", result);
}`,
                    expectedOutput: 'Longest: hello',
                    keyLearnings: [
                        '\'a is a lifetime parameter',
                        'Lifetimes ensure references are valid',
                        'Compiler checks reference validity'
                    ]
                },
                {
                    id: 27,
                    title: 'Pattern Matching Advanced',
                    concepts: ['Destructuring', 'Pattern Guards'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `fn main() {
    let point = (3, 4);
    
    // TODO: Match on point with:
    // - Origin (0, 0)
    // - On x-axis (x, 0)
    // - On y-axis (0, y)
    // - On diagonal (x, y) where x == y
    // - Any other point (x, y)
    
}`,
                    solution: `fn main() {
    let point = (3, 4);
    
    match point {
        (0, 0) => println!("Origin"),
        (x, 0) => println!("On x-axis at {}", x),
        (0, y) => println!("On y-axis at {}", y),
        (x, y) if x == y => println!("On diagonal at ({}, {})", x, y),
        (x, y) => println!("At ({}, {})", x, y),
    }
}`,
                    expectedOutput: 'At (3, 4)',
                    keyLearnings: [
                        'Destructuring patterns',
                        'Pattern guards with if',
                        'Powerful pattern combinations'
                    ]
                },
                {
                    id: 28,
                    title: 'Enum with Data',
                    concepts: ['Enums with Associated Data'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `// TODO: Define Message enum with:
// - Quit (no data)
// - Move { x: i32, y: i32 } (struct-like)
// - Write(String) (tuple-like)
// - Color(i32, i32, i32) (tuple-like RGB)

fn main() {
    process_message(Message::Move { x: 10, y: 20 });
    process_message(Message::Write("Hello".to_string()));
}`,
                    solution: `enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    Color(i32, i32, i32),
}

fn process_message(msg: Message) {
    match msg {
        Message::Quit => println!("Quit"),
        Message::Move { x, y } => println!("Move to ({}, {})", x, y),
        Message::Write(text) => println!("Write: {}", text),
        Message::Color(r, g, b) => println!("Color: RGB({}, {}, {})", r, g, b),
    }
}

fn main() {
    process_message(Message::Move { x: 10, y: 20 });
    process_message(Message::Write("Hello".to_string()));
}`,
                    expectedOutput: 'Move to (10, 20)\nWrite: Hello',
                    keyLearnings: [
                        'Enum variants with associated data',
                        'Different data shapes per variant',
                        'Pattern matching with data'
                    ]
                },
                {
                    id: 29,
                    title: 'Iterator Adapters',
                    concepts: ['Iterator Chains', 'Composition'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `fn main() {
    let nums = vec![1, 2, 3, 4, 5, 6];
    
    // TODO: Filter even numbers, square them, collect into Vec
    
}`,
                    solution: `fn main() {
    let nums = vec![1, 2, 3, 4, 5, 6];
    
    let result: Vec<i32> = nums.iter()
        .filter(|&&x| x % 2 == 0)
        .map(|&x| x * x)
        .collect();
    
    println!("Result: {:?}", result);
}`,
                    expectedOutput: 'Result: [4, 16, 36]',
                    keyLearnings: [
                        'Method chaining',
                        'Iterator composition',
                        'Lazy evaluation'
                    ]
                },
                {
                    id: 30,
                    title: 'Module System',
                    concepts: ['Modules', 'Visibility'],
                    difficulty: '⭐⭐⭐',
                    starterCode: `// TODO: Create a 'math' module with public add and subtract functions

fn main() {
    println!("5 + 3 = {}", math::add(5, 3));
    println!("5 - 3 = {}", math::subtract(5, 3));
}`,
                    solution: `mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    
    pub fn subtract(a: i32, b: i32) -> i32 {
        a - b
    }
}

fn main() {
    println!("5 + 3 = {}", math::add(5, 3));
    println!("5 - 3 = {}", math::subtract(5, 3));
}`,
                    expectedOutput: '5 + 3 = 8\n5 - 3 = 2',
                    keyLearnings: [
                        'mod keyword defines modules',
                        'pub makes items public',
                        'Module paths with ::'
                    ]
                }
            ]
        },
        // ===== EXPERT LEVEL =====
        {
            id: 'expert',
            name: 'Expert',
            icon: '👑',
            description: 'Systems Programming (Chapters 14-20)',
            problems: [
                {
                    id: 31,
                    title: 'Smart Pointers - Box',
                    concepts: ['Box', 'Heap Allocation'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `// TODO: Create a Node struct for a simple linked list using Box

fn main() {
    // TODO: Create a linked list: 1 -> 2 -> None
    
}`,
                    solution: `struct Node {
    value: i32,
    next: Option<Box<Node>>,
}

fn main() {
    let node = Node {
        value: 1,
        next: Some(Box::new(Node {
            value: 2,
            next: None,
        })),
    };
    
    println!("First: {}", node.value);
    if let Some(ref next_node) = node.next {
        println!("Second: {}", next_node.value);
    }
}`,
                    expectedOutput: 'First: 1\nSecond: 2',
                    keyLearnings: [
                        'Box<T> allocates on heap',
                        'Enables recursive types',
                        'Single ownership'
                    ]
                },
                {
                    id: 32,
                    title: 'Reference Counting - Rc',
                    concepts: ['Rc', 'Shared Ownership'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `use std::rc::Rc;

fn main() {
    // TODO: Create Rc<Vec<i32>> and clone it twice
    // TODO: Print strong count
    
}`,
                    solution: `use std::rc::Rc;

fn main() {
    let data = Rc::new(vec![1, 2, 3]);
    let ref1 = Rc::clone(&data);
    let ref2 = Rc::clone(&data);
    
    println!("ref1: {:?}", ref1);
    println!("ref2: {:?}", ref2);
    println!("Strong count: {}", Rc::strong_count(&data));
}`,
                    expectedOutput: 'ref1: [1, 2, 3]\nref2: [1, 2, 3]\nStrong count: 3',
                    keyLearnings: [
                        'Rc<T> for shared ownership',
                        '.clone() increases reference count',
                        'Multiple readers, single owner'
                    ]
                },
                {
                    id: 33,
                    title: 'Interior Mutability',
                    concepts: ['RefCell', 'Internal Mutability'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `use std::cell::RefCell;

// TODO: Create Counter struct with RefCell<i32>
// TODO: Add increment() and get() methods that work with &self

fn main() {
    let counter = Counter { count: RefCell::new(0) };
    counter.increment();
    counter.increment();
    println!("Count: {}", counter.get());
}`,
                    solution: `use std::cell::RefCell;

struct Counter {
    count: RefCell<i32>,
}

impl Counter {
    fn increment(&self) {
        *self.count.borrow_mut() += 1;
    }
    
    fn get(&self) -> i32 {
        *self.count.borrow()
    }
}

fn main() {
    let counter = Counter { count: RefCell::new(0) };
    counter.increment();
    counter.increment();
    println!("Count: {}", counter.get());
}`,
                    expectedOutput: 'Count: 2',
                    keyLearnings: [
                        'RefCell<T> for runtime borrow checking',
                        '.borrow() immutable borrow',
                        '.borrow_mut() mutable borrow'
                    ]
                },
                {
                    id: 34,
                    title: 'Concurrency - Threads',
                    concepts: ['Thread Spawning', 'Join'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `use std::thread;
use std::time::Duration;

fn main() {
    // TODO: Spawn a thread that prints "From thread" twice
    // TODO: Print "From main" twice in main
    // TODO: Join the thread
    
}`,
                    solution: `use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..3 {
            println!("From thread: {}", i);
            thread::sleep(Duration::from_millis(1));
        }
    });
    
    for i in 1..3 {
        println!("From main: {}", i);
        thread::sleep(Duration::from_millis(1));
    }
    
    handle.join().unwrap();
}`,
                    expectedOutput: 'From main: 1\nFrom thread: 1\nFrom main: 2\nFrom thread: 2',
                    keyLearnings: [
                        'thread::spawn() creates thread',
                        '.join() waits for completion',
                        'Thread closure captures environment'
                    ]
                },
                {
                    id: 35,
                    title: 'Message Passing',
                    concepts: ['Channels', 'Multi-Producer'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `use std::sync::mpsc;
use std::thread;

fn main() {
    // TODO: Create a channel
    // TODO: Spawn thread that sends a message
    // TODO: Receive and print the message
    
}`,
                    solution: `use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        tx.send("Hello from thread").unwrap();
    });
    
    let message = rx.recv().unwrap();
    println!("Received: {}", message);
}`,
                    expectedOutput: 'Received: Hello from thread',
                    keyLearnings: [
                        'mpsc::channel() creates sender/receiver',
                        '.send() sends message',
                        '.recv() receives message',
                        'move closure transfers ownership'
                    ]
                },
                {
                    id: 36,
                    title: 'Mutex for Shared State',
                    concepts: ['Mutex', 'Thread-Safe Mutation'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    // TODO: Create Arc<Mutex<i32>> counter
    // TODO: Spawn 3 threads that each increment the counter
    // TODO: Print final count
    
}`,
                    solution: `use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for _ in 0..3 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Final count: {}", *counter.lock().unwrap());
}`,
                    expectedOutput: 'Final count: 3',
                    keyLearnings: [
                        'Mutex<T> for mutual exclusion',
                        '.lock() acquires lock',
                        'Arc for thread-safe shared ownership',
                        'Safe concurrent mutation'
                    ]
                },
                {
                    id: 37,
                    title: 'Trait Objects',
                    concepts: ['Dynamic Dispatch', 'dyn'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `// TODO: Create Animal trait with speak() method
// TODO: Implement for Dog and Cat
// TODO: Create Vec<Box<dyn Animal>> and call speak on each

fn main() {
    
}`,
                    solution: `trait Animal {
    fn speak(&self);
}

struct Dog;
struct Cat;

impl Animal for Dog {
    fn speak(&self) { println!("Woof!"); }
}

impl Animal for Cat {
    fn speak(&self) { println!("Meow!"); }
}

fn main() {
    let animals: Vec<Box<dyn Animal>> = vec![
        Box::new(Dog),
        Box::new(Cat),
    ];
    
    for animal in animals {
        animal.speak();
    }
}`,
                    expectedOutput: 'Woof!\nMeow!',
                    keyLearnings: [
                        'dyn Trait for dynamic dispatch',
                        'Box<dyn Trait> heterogeneous collections',
                        'Runtime polymorphism'
                    ]
                },
                {
                    id: 38,
                    title: 'Async Basics',
                    concepts: ['Async/Await', 'Futures'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `// Note: This example requires tokio runtime
// For the playground, we'll use a simplified synchronous version

fn fetch_data(id: i32) -> String {
    format!("Data for ID: {}", id)
}

fn main() {
    let result = fetch_data(42);
    println!("{}", result);
}`,
                    solution: `// Note: Full async requires tokio crate
// This demonstrates the concept synchronously

fn fetch_data(id: i32) -> String {
    format!("Data for ID: {}", id)
}

fn main() {
    let result = fetch_data(42);
    println!("{}", result);
}`,
                    expectedOutput: 'Data for ID: 42',
                    keyLearnings: [
                        'async functions return Future',
                        '.await waits for completion',
                        'Non-blocking concurrency',
                        'Requires async runtime like tokio'
                    ]
                },
                {
                    id: 39,
                    title: 'Custom Derive Macros',
                    concepts: ['Macros', 'Derive'],
                    difficulty: '⭐⭐⭐⭐',
                    starterCode: `// TODO: Create Person struct with derive(Clone, Debug)

fn main() {
    // TODO: Create a Person, clone it, and print with Debug
    
}`,
                    solution: `#[derive(Clone, Debug)]
struct Person {
    name: String,
    age: u32,
}

fn main() {
    let person = Person {
        name: "Alice".to_string(),
        age: 30,
    };
    
    let cloned = person.clone();
    println!("{:?}", cloned);
}`,
                    expectedOutput: 'Person { name: "Alice", age: 30 }',
                    keyLearnings: [
                        '#[derive(Trait)] generates implementations',
                        'Common: Clone, Debug, PartialEq, Eq',
                        'Saves boilerplate code'
                    ]
                },
                {
                    id: 40,
                    title: 'Optimization & Unsafe',
                    concepts: ['Unsafe Code', 'Performance'],
                    difficulty: '⭐⭐⭐⭐⭐',
                    starterCode: `// TODO: Create an unsafe function and call it from main

fn main() {
    // TODO: Use unsafe block to call your function
    
}`,
                    solution: `unsafe fn unsafe_divide(a: i32, b: i32) -> i32 {
    a / b
}

fn main() {
    let result = unsafe {
        unsafe_divide(10, 2)
    };
    println!("Result: {}", result);
}`,
                    expectedOutput: 'Result: 5',
                    keyLearnings: [
                        'unsafe keyword disables checks',
                        'Use ONLY when necessary',
                        'Document safety requirements',
                        'Dangerous operations: dereferencing raw pointers'
                    ]
                }
            ]
        }
    ]
};

// Export for use
window.PROBLEMS = PROBLEMS;
