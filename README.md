# Rust Learning Path - From Beginner to Master

A comprehensive Rust learning program with progressive difficulty levels. Each level contains problems designed to teach and reinforce key concepts.

---

## 📚 Learning Levels

### 1. **BEGINNER** - Fundamentals (Chapters 1-3)
Master basic syntax, variables, functions, and control flow

### 2. **INTERMEDIATE** - Ownership & Data Structures (Chapters 4-8)
Understand Rust's unique ownership system and collections

### 3. **ADVANCED** - Advanced Concepts (Chapters 9-13)
Error handling, functional programming, and modules

### 4. **EXPERT** - Systems Programming (Chapters 14-20)
Advanced patterns, concurrency, and optimization

---

## ✅ BEGINNER LEVEL - Problems 1-10

### Problem 1: Hello Variables
**Concepts:** Variables, mutability, printing
**Difficulty:** ⭐

**Problem:** Create a program that declares variables and prints them
```rust
fn main() {
    let x = 5;
    let mut y = 10;
    y = y + 5;
    println!("x = {}, y = {}", x, y);
}
```
**Output:** `x = 5, y = 15`
**Key Learning:** 
- Variables are immutable by default
- Use `mut` for mutable variables
- String interpolation with `println!` macro

---

### Problem 2: Data Types Detective
**Concepts:** Primitive types, type annotations
**Difficulty:** ⭐

**Problem:** Identify and use different data types
```rust
fn main() {
    let int_val: i32 = 42;
    let float_val: f64 = 3.14;
    let bool_val: bool = true;
    let char_val: char = 'R';
    
    println!("Integer: {}", int_val);
    println!("Float: {}", float_val);
    println!("Boolean: {}", bool_val);
    println!("Character: {}", char_val);
}
```
**Output:**
```
Integer: 42
Float: 3.14
Boolean: true
Character: R
```
**Key Learning:**
- i32, f64, bool, char are primitive types
- Type annotations with colons
- Range of values each type can hold

---

### Problem 3: Function Factory
**Concepts:** Functions, parameters, return values
**Difficulty:** ⭐

**Problem:** Write functions to calculate simple operations
```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn multiply(x: i32, y: i32) -> i32 {
    x * y
}

fn main() {
    println!("5 + 3 = {}", add(5, 3));
    println!("4 * 6 = {}", multiply(4, 6));
}
```
**Output:**
```
5 + 3 = 8
4 * 6 = 24
```
**Key Learning:**
- Function syntax: `fn name(param: type) -> return_type`
- Return values (implicit with last expression)
- Function calls

---

### Problem 4: Loop Master
**Concepts:** For, while, loop constructs
**Difficulty:** ⭐

**Problem:** Print numbers using different loop types
```rust
fn main() {
    // For loop
    println!("For loop (1-5):");
    for i in 1..=5 {
        println!("{}", i);
    }
    
    // While loop
    println!("\nWhile loop (countdown from 3):");
    let mut count = 3;
    while count > 0 {
        println!("{}", count);
        count -= 1;
    }
    println!("Blastoff!");
}
```
**Output:**
```
For loop (1-5):
1
2
3
4
5

While loop (countdown from 3):
3
2
1
Blastoff!
```
**Key Learning:**
- `for..in` loops with ranges (1..5 is exclusive, 1..=5 is inclusive)
- `while` loops with conditions
- Range notation

---

### Problem 5: If-Else Logic
**Concepts:** Conditionals, boolean logic
**Difficulty:** ⭐

**Problem:** Number classification program
```rust
fn main() {
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
}
```
**Output:**
```
42 is positive
42 is even
```
**Key Learning:**
- if-else chains
- if as an expression (returns value)
- Comparison operators

---

### Problem 6: String Manipulation
**Concepts:** String vs &str, String methods
**Difficulty:** ⭐

**Problem:** Work with strings
```rust
fn main() {
    let mut s = String::from("Hello");
    s.push_str(", Rust!");
    println!("{}", s);
    
    let message = "Rust is awesome";
    println!("Length: {}", message.len());
    println!("Uppercase: {}", message.to_uppercase());
    println!("Contains 'awesome': {}", message.contains("awesome"));
}
```
**Output:**
```
Hello, Rust!
Length: 15
Uppercase: RUST IS AWESOME
Contains 'awesome': true
```
**Key Learning:**
- `String::from()` for owned strings
- `&str` string slices
- String methods: push_str, len, to_uppercase, contains

---

### Problem 7: Array Basics
**Concepts:** Arrays, fixed-size collections
**Difficulty:** ⭐

**Problem:** Create and manipulate arrays
```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    println!("Array: {:?}", arr);
    println!("Length: {}", arr.len());
    println!("First element: {}", arr[0]);
    println!("Sum: {}", arr.iter().sum::<i32>());
}
```
**Output:**
```
Array: [1, 2, 3, 4, 5]
Length: 5
First element: 1
Sum: 15
```
**Key Learning:**
- Array syntax: `[element; count]`
- Indexing with `[n]`
- `.len()` method
- `.iter().sum()` for aggregation

---

### Problem 8: Tuple Time
**Concepts:** Tuples, destructuring
**Difficulty:** ⭐

**Problem:** Work with tuples
```rust
fn main() {
    let person = ("Alice", 25, 5.9);
    println!("Name: {}, Age: {}, Height: {}", person.0, person.1, person.2);
    
    let (name, age, height) = person;
    println!("Destructured: {} is {} years old", name, age);
}
```
**Output:**
```
Name: Alice, Age: 25, Height: 5.9
Destructured: Alice is 25 years old
```
**Key Learning:**
- Tuple syntax: `(type1, type2, type3)`
- Tuple indexing with `.0`, `.1`, etc.
- Destructuring assignment

---

### Problem 9: Match Statement
**Concepts:** Pattern matching, match expressions
**Difficulty:** ⭐⭐

**Problem:** Day of week classifier
```rust
fn main() {
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
}
```
**Output:**
```
Wednesday
```
**Key Learning:**
- `match` expression for pattern matching
- Multiple patterns with `|`
- Default case with `_`
- Match is exhaustive

---

### Problem 10: Enum Basics
**Concepts:** Enums, custom types
**Difficulty:** ⭐⭐

**Problem:** Create a color enum
```rust
enum Color {
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
}
```
**Output:**
```
Stop!
```
**Key Learning:**
- Enum definition
- Enum variants
- Using enums with match

---

## ⚡ INTERMEDIATE LEVEL - Problems 11-20

### Problem 11: Ownership Basics
**Concepts:** Ownership, move semantics
**Difficulty:** ⭐⭐

**Problem:** Understand ownership
```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2
    
    // println!("{}", s1);  // ERROR: s1 no longer owns the data
    println!("{}", s2);
}
```
**Output:**
```
hello
```
**Key Learning:**
- Values have one owner at a time
- Move transfers ownership
- Original variable becomes invalid after move

---

### Problem 12: Borrowing
**Concepts:** References, borrowing
**Difficulty:** ⭐⭐

**Problem:** Use references instead of moving
```rust
fn print_length(s: &String) {
    println!("Length: {}", s.len());
}

fn main() {
    let s = String::from("hello");
    print_length(&s);
    println!("s is still valid: {}", s);
}
```
**Output:**
```
Length: 5
s is still valid: hello
```
**Key Learning:**
- `&T` creates an immutable reference
- Borrowing doesn't move ownership
- Can have multiple immutable references

---

### Problem 13: Mutable References
**Concepts:** Mutable borrowing
**Difficulty:** ⭐⭐

**Problem:** Modify data through mutable reference
```rust
fn add_exclamation(s: &mut String) {
    s.push_str("!");
}

fn main() {
    let mut s = String::from("hello");
    add_exclamation(&mut s);
    println!("{}", s);
}
```
**Output:**
```
hello!
```
**Key Learning:**
- `&mut T` for mutable references
- Only one mutable reference at a time
- Can't have mutable and immutable refs together

---

### Problem 14: Slice Slicing
**Concepts:** Slices, string slices
**Difficulty:** ⭐⭐

**Problem:** Work with string slices
```rust
fn main() {
    let s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];
    
    println!("hello: {}", hello);
    println!("world: {}", world);
}
```
**Output:**
```
hello: hello
world: world
```
**Key Learning:**
- Slice syntax: `&s[start..end]`
- Slices are references to part of data
- Start is inclusive, end is exclusive

---

### Problem 15: Vector Collections
**Concepts:** Vec, dynamic collections
**Difficulty:** ⭐⭐

**Problem:** Create and manipulate vectors
```rust
fn main() {
    let mut vec = vec![1, 2, 3];
    
    vec.push(4);
    vec.push(5);
    
    for num in &vec {
        println!("{}", num);
    }
    
    println!("Length: {}", vec.len());
}
```
**Output:**
```
1
2
3
4
5
Length: 5
```
**Key Learning:**
- `vec![]` macro for vector creation
- `.push()` to add elements
- Iterate with `for..in`

---

### Problem 16: HashMap Lookups
**Concepts:** HashMap, key-value stores
**Difficulty:** ⭐⭐

**Problem:** Create a simple dictionary
```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    
    scores.insert("Alice", 95);
    scores.insert("Bob", 87);
    scores.insert("Charlie", 92);
    
    if let Some(score) = scores.get("Alice") {
        println!("Alice's score: {}", score);
    }
}
```
**Output:**
```
Alice's score: 95
```
**Key Learning:**
- `HashMap::new()` creates empty map
- `.insert(key, value)` adds entries
- `.get(key)` returns Option
- Use `if let` for Option handling

---

### Problem 17: Option Type
**Concepts:** Option enum, Some/None
**Difficulty:** ⭐⭐

**Problem:** Handle optional values
```rust
fn divide(a: i32, b: i32) -> Option<i32> {
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
}
```
**Output:**
```
Result: 5
Cannot divide by zero
```
**Key Learning:**
- `Option<T>` represents Some or None
- Must handle None case
- Use `match` for comprehensive handling

---

### Problem 18: Result Type
**Concepts:** Result enum, error handling
**Difficulty:** ⭐⭐

**Problem:** Use Result for recoverable errors
```rust
fn parse_number(s: &str) -> Result<i32, String> {
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
}
```
**Output:**
```
Parsed: 42
```
**Key Learning:**
- `Result<T, E>` represents Ok or Err
- Use for functions that might fail
- Pattern match to handle both cases

---

### Problem 19: Struct Definition
**Concepts:** Structs, custom data types
**Difficulty:** ⭐⭐

**Problem:** Define a Rectangle struct
```rust
struct Rectangle {
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
}
```
**Output:**
```
Width: 30, Height: 50
Area: 1500
```
**Key Learning:**
- Struct syntax with named fields
- Create instances with field initializer
- Access fields with dot notation

---

### Problem 20: Struct Methods
**Concepts:** impl blocks, methods
**Difficulty:** ⭐⭐

**Problem:** Add methods to structs
```rust
struct Rectangle {
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
}
```
**Output:**
```
Area: 1500
Perimeter: 160
```
**Key Learning:**
- `impl` block for methods
- `&self` for immutable methods
- Method calls with dot notation

---

## 🚀 ADVANCED LEVEL - Problems 21-30

### Problem 21: Associated Functions
**Concepts:** Associated functions, constructors
**Difficulty:** ⭐⭐⭐

**Problem:** Create constructor patterns
```rust
struct Point {
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
}
```
**Output:**
```
Point: (3, 4)
Distance: 5
```
**Key Learning:**
- Associated functions use `::`
- `new` is convention for constructors
- `Self` and field shorthand

---

### Problem 22: Trait Definition
**Concepts:** Traits, shared behavior
**Difficulty:** ⭐⭐⭐

**Problem:** Define a drawable trait
```rust
trait Drawable {
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
}
```
**Output:**
```
Drawing circle with radius 5
Area: 78.5
```
**Key Learning:**
- Trait definition with required methods
- `impl Trait for Type` syntax
- Traits define shared interface

---

### Problem 23: Generic Functions
**Concepts:** Generics, type parameters
**Difficulty:** ⭐⭐⭐

**Problem:** Write generic functions
```rust
fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
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
}
```
**Output:**
```
Largest number: 100
Largest char: y
```
**Key Learning:**
- `<T>` generic type parameter
- Trait bounds with `:`
- Generics for code reuse

---

### Problem 24: Closures
**Concepts:** Closures, anonymous functions
**Difficulty:** ⭐⭐⭐

**Problem:** Use closures with iterators
```rust
fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    
    let doubled: Vec<i32> = nums.iter()
        .map(|x| x * 2)
        .collect();
    
    println!("Doubled: {:?}", doubled);
    
    let sum: i32 = nums.iter()
        .filter(|&&x| x > 2)
        .sum();
    
    println!("Sum of values > 2: {}", sum);
}
```
**Output:**
```
Doubled: [2, 4, 6, 8, 10]
Sum of values > 2: 12
```
**Key Learning:**
- Closure syntax: `|param| body`
- `.map()` transforms elements
- `.filter()` selects elements
- `.collect()` into collection

---

### Problem 25: Error Handling with ?
**Concepts:** ? operator, error propagation
**Difficulty:** ⭐⭐⭐

**Problem:** Propagate errors elegantly
```rust
fn parse_and_double(s: &str) -> Result<i32, String> {
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
}
```
**Output:**
```
Result: 42
Error: Failed to parse
```
**Key Learning:**
- `?` operator returns error early
- `.map_err()` transforms error type
- Cleaner than nested match statements

---

### Problem 26: Lifetime Syntax
**Concepts:** Lifetimes, borrow semantics
**Difficulty:** ⭐⭐⭐

**Problem:** Work with lifetimes
```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
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
}
```
**Output:**
```
Longest: hello
```
**Key Learning:**
- `'a` is a lifetime parameter
- Lifetimes ensure references are valid
- Compiler checks reference validity

---

### Problem 27: Pattern Matching Advanced
**Concepts:** Destructuring, pattern guards
**Difficulty:** ⭐⭐⭐

**Problem:** Use advanced pattern matching
```rust
fn main() {
    let point = (3, 4);
    
    match point {
        (0, 0) => println!("Origin"),
        (x, 0) => println!("On x-axis at {}", x),
        (0, y) => println!("On y-axis at {}", y),
        (x, y) if x == y => println!("On diagonal at ({}, {})", x, y),
        (x, y) => println!("At ({}, {})", x, y),
    }
}
```
**Output:**
```
At (3, 4)
```
**Key Learning:**
- Destructuring patterns
- Pattern guards with `if`
- Powerful pattern combinations

---

### Problem 28: Enum with Data
**Concepts:** Enums with associated data
**Difficulty:** ⭐⭐⭐

**Problem:** Use enums with data
```rust
enum Message {
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
}
```
**Output:**
```
Move to (10, 20)
Write: Hello
```
**Key Learning:**
- Enum variants with associated data
- Different data shapes per variant
- Pattern matching with data

---

### Problem 29: Iterator Adapters
**Concepts:** Iterator chains, composition
**Difficulty:** ⭐⭐⭐

**Problem:** Chain iterator operations
```rust
fn main() {
    let nums = vec![1, 2, 3, 4, 5, 6];
    
    let result: Vec<i32> = nums.iter()
        .filter(|&&x| x % 2 == 0)
        .map(|&x| x * x)
        .collect();
    
    println!("Result: {:?}", result);
}
```
**Output:**
```
Result: [4, 16, 36]
```
**Key Learning:**
- Method chaining
- Iterator composition
- Lazy evaluation

---

### Problem 30: Module System
**Concepts:** Modules, visibility
**Difficulty:** ⭐⭐⭐

**Problem:** Organize code with modules
```rust
mod math {
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
}
```
**Output:**
```
5 + 3 = 8
5 - 3 = 2
```
**Key Learning:**
- `mod` keyword defines modules
- `pub` makes items public
- Module paths with `::`

---

## 💎 EXPERT LEVEL - Problems 31-40

### Problem 31: Smart Pointers - Box
**Concepts:** Box, heap allocation
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Use Box for recursive structures
```rust
struct Node {
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
}
```
**Output:**
```
First: 1
Second: 2
```
**Key Learning:**
- `Box<T>` allocates on heap
- Enables recursive types
- Single ownership

---

### Problem 32: Reference Counting - Rc
**Concepts:** Rc for shared ownership
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Share ownership with Rc
```rust
use std::rc::Rc;

fn main() {
    let data = Rc::new(vec![1, 2, 3]);
    let ref1 = Rc::clone(&data);
    let ref2 = Rc::clone(&data);
    
    println!("ref1: {:?}", ref1);
    println!("ref2: {:?}", ref2);
    println!("Strong count: {}", Rc::strong_count(&data));
}
```
**Output:**
```
ref1: [1, 2, 3]
ref2: [1, 2, 3]
Strong count: 3
```
**Key Learning:**
- `Rc<T>` for shared ownership
- `.clone()` increases reference count
- Multiple readers, single owner

---

### Problem 33: Interior Mutability
**Concepts:** RefCell, internal mutability
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Mutate through immutable ref
```rust
use std::cell::RefCell;

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
}
```
**Output:**
```
Count: 2
```
**Key Learning:**
- `RefCell<T>` for runtime borrow checking
- `.borrow()` immutable borrow
- `.borrow_mut()` mutable borrow

---

### Problem 34: Concurrency - Threads
**Concepts:** Thread spawning, channels
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Spawn and join threads
```rust
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..3 {
            println!("From thread: {}", i);
            thread::sleep(Duration::from_millis(100));
        }
    });
    
    for i in 1..3 {
        println!("From main: {}", i);
        thread::sleep(Duration::from_millis(100));
    }
    
    handle.join().unwrap();
}
```
**Output:** (interleaved)
```
From main: 1
From thread: 1
From main: 2
From thread: 2
```
**Key Learning:**
- `thread::spawn()` creates thread
- `.join()` waits for completion
- Thread closure captures environment

---

### Problem 35: Message Passing
**Concepts:** Channels, multi-producer
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Thread communication via channels
```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        tx.send("Hello from thread").unwrap();
    });
    
    let message = rx.recv().unwrap();
    println!("Received: {}", message);
}
```
**Output:**
```
Received: Hello from thread
```
**Key Learning:**
- `mpsc::channel()` creates sender/receiver
- `.send()` sends message
- `.recv()` receives message
- `move` closure transfers ownership

---

### Problem 36: Mutex for Shared State
**Concepts:** Mutex, thread-safe mutation
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Safely share mutable state
```rust
use std::sync::Mutex;
use std::thread;

fn main() {
    let counter = Mutex::new(0);
    
    let mut handles = vec![];
    
    for _ in 0..3 {
        let counter = &counter;
        let handle = thread::spawn(|| {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Final count: {}", *counter.lock().unwrap());
}
```
**Output:**
```
Final count: 3
```
**Key Learning:**
- `Mutex<T>` for mutual exclusion
- `.lock()` acquires lock
- Safe concurrent mutation

---

### Problem 37: Trait Objects
**Concepts:** Dynamic dispatch, dyn
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Use trait objects for polymorphism
```rust
trait Animal {
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
}
```
**Output:**
```
Woof!
Meow!
```
**Key Learning:**
- `dyn Trait` for dynamic dispatch
- `Box<dyn Trait>` heterogeneous collections
- Runtime polymorphism

---

### Problem 38: Async Basics
**Concepts:** Async/await, futures
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Write async functions
```rust
async fn fetch_data(id: i32) -> String {
    format!("Data for ID: {}", id)
}

#[tokio::main]
async fn main() {
    let result = fetch_data(42).await;
    println!("{}", result);
}
```

**Requires:** `tokio` in Cargo.toml
```toml
[dependencies]
tokio = { version = "1", features = ["full"] }
```

**Output:**
```
Data for ID: 42
```
**Key Learning:**
- `async` functions return Future
- `.await` waits for completion
- Non-blocking concurrency

---

### Problem 39: Custom Derive Macros
**Concepts:** Macros, derive
**Difficulty:** ⭐⭐⭐⭐

**Problem:** Use derived traits
```rust
#[derive(Clone, Debug)]
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
}
```
**Output:**
```
Person { name: "Alice", age: 30 }
```
**Key Learning:**
- `#[derive(Trait)]` generates implementations
- Common: Clone, Debug, PartialEq, Eq
- Saves boilerplate code

---

### Problem 40: Optimization & Unsafe
**Concepts:** Unsafe code, performance
**Difficulty:** ⭐⭐⭐⭐⭐

**Problem:** When and how to use unsafe
```rust
unsafe fn unsafe_divide(a: i32, b: i32) -> i32 {
    a / b
}

fn main() {
    let result = unsafe {
        unsafe_divide(10, 2)
    };
    println!("Result: {}", result);
}
```
**Output:**
```
Result: 5
```
**Key Learning:**
- `unsafe` keyword disables checks
- Use ONLY when necessary
- Document safety requirements
- Dangerous operations: dereferencing raw pointers, unsafe functions

---

## 🎯 How to Use This Learning Path

1. **Start with BEGINNER level** - Master fundamentals
2. **Read the concept explanation** for each problem
3. **Write code in `.rs` files** - Don't just read!
4. **Compile and run** - See output with `rustc` or `cargo`
5. **Modify the code** - Experiment and break it intentionally
6. **Move to next level** when comfortable

### Running Examples

```bash
# Compile and run
rustc problem_name.rs
.\problem_name.exe

# Or with Cargo
cargo run
```

---

## 📝 Key Concepts Summary

| Level | Focus | Key Ideas |
|-------|-------|-----------|
| Beginner | Syntax & Basics | Variables, functions, loops, control flow |
| Intermediate | Ownership | Moving, borrowing, slices, collections |
| Advanced | Advanced Types | Traits, generics, error handling |
| Expert | Systems | Smart pointers, concurrency, async |

---

## ⚠️ Common Mistakes to Learn From

1. **Forgetting ownership rules** - Each value has one owner
2. **Fighting the borrow checker** - It's protecting you!
3. **Panicking in production** - Use Result/Option instead
4. **Not using ? operator** - Makes error handling cleaner
5. **Unwrapping without checking** - Can panic at runtime
6. **Thread data ownership** - Use Arc<Mutex<T>> for shared state
7. **Lifetime confusion** - Read the compiler error carefully!

---

## 🚀 Next Steps

After mastering all 40 problems:
1. Build a small project (todo app, game, web server)
2. Contribute to open source Rust projects
3. Explore specific domains (web, systems, gamedev)
4. Read "The Rust Book" for deeper understanding

Good luck on your Rust journey! 🦀

