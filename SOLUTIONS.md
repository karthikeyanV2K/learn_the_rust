# ✅ Complete Solutions - All 40 Problems

All solutions with explanations and key learnings.

---

## 🟢 BEGINNER LEVEL (1-10)

### Problem 1: Hello Variables
```rust
fn main() {
    let x = 5;
    let mut y = 10;
    y = y + 5;
    println!("x = {}, y = {}", x, y);
}
```
**Output**: `x = 5, y = 15`
**Key**: Variables immutable by default, use `mut` for mutable, `println!` for output

---

### Problem 2: Data Types Detective
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
**Output**:
```
Integer: 42
Float: 3.14
Boolean: true
Character: R
```
**Key**: Type annotations with `:`, primitive types: i32, f64, bool, char

---

### Problem 3: Function Factory
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
**Output**:
```
5 + 3 = 8
4 * 6 = 24
```
**Key**: Functions with parameters and return types, implicit return (last expression)

---

### Problem 4: Loop Master
```rust
fn main() {
    println!("For loop (1-5):");
    for i in 1..=5 {
        println!("{}", i);
    }
    
    println!("While loop (countdown from 3):");
    let mut count = 3;
    while count > 0 {
        println!("{}", count);
        count -= 1;
    }
    println!("Blastoff!");
}
```
**Output**:
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
**Key**: `for..in` with ranges (1..5 exclusive, 1..=5 inclusive), `while` loops

---

### Problem 5: If-Else Logic
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
    
    let status = if number % 2 == 0 {
        "even"
    } else {
        "odd"
    };
    println!("{} is {}", number, status);
}
```
**Output**:
```
42 is positive
42 is even
```
**Key**: `if` as expression returning value, comparison operators, modulo `%`

---

### Problem 6: String Manipulation
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
**Output**:
```
Hello, Rust!
Length: 15
Uppercase: RUST IS AWESOME
Contains 'awesome': true
```
**Key**: `String::from()` creates owned string, `&str` for string slices, string methods

---

### Problem 7: Array Basics
```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    println!("Array: {:?}", arr);
    println!("Length: {}", arr.len());
    println!("First element: {}", arr[0]);
    println!("Sum: {}", arr.iter().sum::<i32>());
}
```
**Output**:
```
Array: [1, 2, 3, 4, 5]
Length: 5
First element: 1
Sum: 15
```
**Key**: Array syntax `[elem; count]`, indexing with `[n]`, `.iter().sum()`

---

### Problem 8: Tuple Time
```rust
fn main() {
    let person = ("Alice", 25, 5.9);
    println!("Name: {}, Age: {}, Height: {}", person.0, person.1, person.2);
    
    let (name, age, height) = person;
    println!("Destructured: {} is {} years old", name, age);
}
```
**Output**:
```
Name: Alice, Age: 25, Height: 5.9
Destructured: Alice is 25 years old
```
**Key**: Tuple syntax `(type1, type2, ...)`, indexing `.0/.1/.2`, destructuring

---

### Problem 9: Match Statement
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
**Output**: `Wednesday`
**Key**: Pattern matching, multiple patterns with `|`, default case `_`, exhaustiveness

---

### Problem 10: Enum Basics
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
**Output**: `Stop!`
**Key**: Enum definition, variants with `::`, pattern matching on enums

---

## 🟡 INTERMEDIATE LEVEL (11-20)

### Problem 11: Ownership Basics
```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 moved to s2
    
    println!("{}", s2);  // Works
    // println!("{}", s1);  // ERROR: s1 no longer owns data
}
```
**Output**: `hello`
**Key**: Single owner at a time, move transfers ownership, preventing double-free

---

### Problem 12: Borrowing
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
**Output**:
```
Length: 5
s is still valid: hello
```
**Key**: References with `&`, borrowing doesn't move, multiple immutable refs allowed

---

### Problem 13: Mutable References
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
**Output**: `hello!`
**Key**: `&mut T` for mutable references, only ONE mutable ref at a time

---

### Problem 14: String Slices
```rust
fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    &s[..]
}

fn main() {
    let s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];
    
    println!("hello: {}", hello);
    println!("world: {}", world);
}
```
**Output**:
```
hello: hello
world: world
```
**Key**: Slice syntax `[start..end]`, exclusive end, references to part of data

---

### Problem 15: Vector Collections
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
**Output**:
```
1
2
3
4
5
Length: 5
```
**Key**: `Vec<T>` growable arrays, `vec![]` macro, `.push()`, iteration with `&`

---

### Problem 16: HashMap Lookups
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
**Output**: `Alice's score: 95`
**Key**: Key-value storage, `.get()` returns Option, `if let` pattern matching

---

### Problem 17: Option Type
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
**Output**:
```
Result: 5
Cannot divide by zero
```
**Key**: Option<T> for optional values, Some/None, compiler forces handling

---

### Problem 18: Result Type
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
    
    match parse_number("abc") {
        Ok(n) => println!("Parsed: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}
```
**Output**:
```
Parsed: 42
Error: Not a valid number
```
**Key**: Result<T, E> for errors, Ok/Err, compiler forces error handling

---

### Problem 19: Struct Definition
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
**Output**:
```
Width: 30, Height: 50
Area: 1500
```
**Key**: Custom data types, named fields, instance creation, field access

---

### Problem 20: Struct Methods
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
**Output**:
```
Area: 1500
Perimeter: 160
```
**Key**: `impl` blocks for methods, `&self` parameter, method calls with `.`

---

## 🟠 ADVANCED LEVEL (21-30)

### Problem 21: Associated Functions
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
**Output**:
```
Point: (3, 4)
Distance: 5
```
**Key**: Associated functions with `::`, constructor pattern, field shorthand

---

### Problem 22: Trait Definition
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
**Output**:
```
Drawing circle with radius 5
Area: 78.5
```
**Key**: Traits define shared behavior, `impl Trait for Type` syntax

---

### Problem 23: Generic Functions
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
**Output**:
```
Largest number: 100
Largest char: y
```
**Key**: Type parameters `<T>`, trait bounds, code reuse

---

### Problem 24: Closures
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
**Output**:
```
Doubled: [2, 4, 6, 8, 10]
Sum of values > 2: 12
```
**Key**: Closure syntax `|param| body`, `.map()`, `.filter()`, `.collect()`

---

### Problem 25: Error Propagation
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
**Output**:
```
Result: 42
Error: Failed to parse
```
**Key**: `?` operator for error propagation, `.map_err()` for transformation

---

### Problem 26: Lifetimes
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
**Output**: `Longest: hello`
**Key**: Lifetime parameters `'a`, ensuring reference validity

---

### Problem 27: Pattern Matching Advanced
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
**Output**: `At (3, 4)`
**Key**: Destructuring, pattern guards with `if`, comprehensive patterns

---

### Problem 28: Enum with Associated Data
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
    process_message(Message::Color(255, 0, 0));
    process_message(Message::Quit);
}
```
**Output**:
```
Move to (10, 20)
Write: Hello
Color: RGB(255, 0, 0)
Quit
```
**Key**: Enums with different data types per variant

---

### Problem 29: Iterator Adapters
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
**Output**: `Result: [4, 16, 36]`
**Key**: Iterator chains, lazy evaluation, composition

---

### Problem 30: Module System
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
**Output**:
```
5 + 3 = 8
5 - 3 = 2
```
**Key**: `mod` keyword, `pub` visibility, `::` for module access

---

## 🔴 EXPERT LEVEL (31-40)

### Problem 31: Smart Pointers - Box
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
**Output**:
```
First: 1
Second: 2
```
**Key**: `Box<T>` for heap allocation, recursive types, single ownership

---

### Problem 32: Reference Counting - Rc
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
**Output**:
```
ref1: [1, 2, 3]
ref2: [1, 2, 3]
Strong count: 3
```
**Key**: Shared ownership, reference counting, single-threaded

---

### Problem 33: Interior Mutability - RefCell
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
**Output**: `Count: 2`
**Key**: Runtime borrow checking, `.borrow()`, `.borrow_mut()`

---

### Problem 34: Concurrency - Threads
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
**Output**: (interleaved)
```
From main: 1
From thread: 1
From main: 2
From thread: 2
```
**Key**: `thread::spawn()`, closures, `.join()` blocking

---

### Problem 35: Message Passing - Channels
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
**Output**: `Received: Hello from thread`
**Key**: Channel communication, ownership transfer, multi-producer

---

### Problem 36: Mutex for Shared State
```rust
use std::sync::Mutex;
use std::sync::Arc;
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    
    let mut handles = vec![];
    
    for _ in 0..3 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter_clone.lock().unwrap();
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
**Output**: `Final count: 3`
**Key**: `Arc` for thread-safe reference counting, `Mutex` for mutual exclusion

---

### Problem 37: Trait Objects
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
**Output**:
```
Woof!
Meow!
```
**Key**: Dynamic dispatch with `dyn`, `Box<dyn Trait>` for heterogeneous collections

---

### Problem 38: Async/Await
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
**Output**: `Data for ID: 42`
**Key**: Async functions, `.await`, non-blocking concurrency, futures

---

### Problem 39: Derive Macros
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
**Output**: `Person { name: "Alice", age: 30 }`
**Key**: Automatic trait implementation, common derives

---

### Problem 40: Unsafe Code
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
**Output**: `Result: 5`
**Key**: When and how to use `unsafe`, raw pointers, breaking safety contracts

---

## 🎯 Learning Summary

| Level | Topics | Key Skills |
|-------|--------|-----------|
| **Beginner** | Variables, functions, loops, control flow | Syntax, basic problem-solving |
| **Intermediate** | Ownership, borrowing, collections, structs | Understanding Rust's core concepts |
| **Advanced** | Traits, generics, error handling, closures | Building reusable, safe code |
| **Expert** | Smart pointers, concurrency, async | Systems programming, advanced patterns |

---

## 🚀 Mastery Checklist

After completing all 40 problems, you should understand:

- ✅ Rust's ownership system
- ✅ Borrowing and lifetimes
- ✅ Pattern matching and destructuring
- ✅ Error handling with Result/Option
- ✅ Generic programming
- ✅ Traits and trait objects
- ✅ Iterator adapters and functional programming
- ✅ Concurrent programming with threads and channels
- ✅ Smart pointers and memory management
- ✅ Async/await fundamentals

---

Congratulations on making it through all 40 problems! 🎉

