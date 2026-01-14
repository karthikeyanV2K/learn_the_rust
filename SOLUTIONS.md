# ✅ Complete Solutions - All 40 Problems

This file provides the solution code for all 40 problems with a short explanation and style/syntax notes to help you understand idiomatic Rust.

---

## Beginner (1–10)

### Problem 1 — Hello Variables
```rust
fn main() {
    let x = 5;
    let mut y = 10;
    y = y + 5;
    println!("x = {}, y = {}", x, y);
}
```
- Explanation: `x` is immutable, `y` is mutable (`mut`). `println!` prints formatted output.
- Style & Syntax: Prefer immutable where possible; use `let mut` only when you really need to change a value.

### Problem 2 — Data Types Detective
```rust
fn main() {
    let int_val: i32 = 42;
    let float_val: f64 = 3.14;
    let bool_val: bool = true;
    let char_val: char = 'R';
    println!("Integer: {}", int_val);
}
```
- Explanation: Rust primitives include integers, floats, booleans, and `char` (Unicode scalar).
- Style & Syntax: Prefer type inference; add explicit types when needed for clarity or disambiguation.

### Problem 3 — Function Factory
```rust
fn add(a: i32, b: i32) -> i32 { a + b }
fn multiply(x: i32, y: i32) -> i32 { x * y }
fn main() {
    println!("5 + 3 = {}", add(5, 3));
}
```
- Explanation: Functions declare parameter and return types. Last expression is returned implicitly.
- Style & Syntax: Keep small functions single-line when concise; use explicit `return` only when necessary.

### Problem 4 — Loop Master
```rust
fn main() {
    for i in 1..=5 { println!("{}", i); }
    let mut count = 3;
    while count > 0 { println!("{}", count); count -= 1; }
}
```
- Explanation: `1..=5` is inclusive range. `while` is used for condition-driven loops.
- Style & Syntax: Prefer `for` with iterators when possible to avoid index mistakes.

### Problem 5 — If-Else Logic
```rust
fn main() {
    let number = 42;
    if number > 0 { println!("{} is positive", number); }
    let status = if number % 2 == 0 { "even" } else { "odd" };
    println!("{} is {}", number, status);
}
```
- Explanation: `if` can be an expression returning a value. Use braces for clarity.
- Style & Syntax: Keep branches short; prefer pattern matching for many cases.

### Problem 6 — String Manipulation
```rust
fn main() {
    let mut s = String::from("Hello");
    s.push_str(", Rust!");
    println!("{}", s);
    let message = "Rust is awesome";
    println!("Length: {}", message.len());
}
```
- Explanation: `String` is owned and growable. `&str` is a string slice.
- Style & Syntax: Use `&str` for borrowed, `String` for owned and mutable text.

### Problem 7 — Array Basics
```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    println!("Array: {:?}", arr);
    println!("Sum: {}", arr.iter().sum::<i32>());
}
```
- Explanation: Arrays have fixed length; use `Vec<T>` for growable collections.
- Style & Syntax: Use `{:?}` for debug printing; prefer iterators (`.iter()`) over indexing.

### Problem 8 — Tuple Time
```rust
fn main() {
    let person = ("Alice", 25, 5.9);
    let (name, age, _) = person;
    println!("{} is {}", name, age);
}
```
- Explanation: Tuples group heterogeneous values accessed by index or destructuring.
- Style & Syntax: Destructure tuples when extracting values; avoid `.0` if named fields make sense.

### Problem 9 — Match Statement
```rust
fn main() {
    let day = 3;
    match day {
        1 => println!("Monday"),
        2 => println!("Tuesday"),
        3 => println!("Wednesday"),
        6 | 7 => println!("Weekend!"),
        _ => println!("Invalid day"),
    }
}
```
- Explanation: `match` is exhaustive and powerful for branching on patterns.
- Style & Syntax: Always include a fallback `_` unless every possibility is handled.

### Problem 10 — Enum Basics
```rust
enum Color { Red, Green, Blue }
fn main() {
    let color = Color::Red;
    match color {
        Color::Red => println!("Stop!"),
        Color::Green => println!("Go!"),
        Color::Blue => println!("Cool!"),
    }
}
```
- Explanation: Enums define variants; use `match` to handle them.
- Style & Syntax: Prefer `match` for exhaustive handling and clarity.

---

## Intermediate (11–20)

### Problem 11 — Ownership Basics
```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // move
    println!("{}", s2);
}
```
- Explanation: `String` is moved; the original variable becomes invalid after move.
- Style & Syntax: Prefer cloning only when necessary; understand moves and borrows.

### Problem 12 — Borrowing
```rust
fn print_length(s: &String) { println!("Length: {}", s.len()); }
fn main() {
    let s = String::from("hello");
    print_length(&s);
}
```
- Explanation: Borrowing via `&` avoids moving ownership.
- Style & Syntax: Use `&str` when a function only needs a string slice (`fn foo(s: &str)`).

### Problem 13 — Mutable References
```rust
fn add_exclamation(s: &mut String) { s.push_str("!"); }
fn main() { let mut s = String::from("hello"); add_exclamation(&mut s); }
```
- Explanation: `&mut` allows in-place mutation but only one mutable borrow at a time.
- Style & Syntax: Limit mutable borrows scope to minimize conflicts.

### Problem 14 — String Slices
```rust
fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' { return &s[0..i]; }
    }
    &s[..]
}
```
- Explanation: String slices `&str` reference a portion of a string without copying.
- Style & Syntax: Prefer `&str` in APIs; use slices to avoid ownership transfer.

### Problem 15 — Vector Collections
```rust
fn main() {
    let mut vec = vec![1, 2, 3];
    vec.push(4);
    for num in &vec { println!("{}", num); }
}
```
- Explanation: `Vec<T>` is growable; iterate by reference to avoid moves.
- Style & Syntax: Use `Vec::new()` or `vec![]`; favor iterators and higher-order ops.

### Problem 16 — HashMap Lookups
```rust
use std::collections::HashMap;
fn main() {
    let mut scores = HashMap::new();
    scores.insert("Alice", 95);
    if let Some(score) = scores.get("Alice") { println!("{}", score); }
}
```
- Explanation: `.get()` returns `Option<&V>`; handle with `if let` or `match`.
- Style & Syntax: Use `entry` API for insert-or-update patterns.

### Problem 17 — Option Type
```rust
fn divide(a: i32, b: i32) -> Option<i32> {
    if b == 0 { None } else { Some(a / b) }
}
```
- Explanation: `Option<T>` encodes presence/absence; forces explicit handling.
- Style & Syntax: Use combinators like `.map()` and `.and_then()` to compose.

### Problem 18 — Result Type
```rust
fn parse_number(s: &str) -> Result<i32, String> {
    s.parse::<i32>().map_err(|_| "Not a valid number".to_string())
}
```
- Explanation: `Result<T, E>` signals success/error; use `?` to propagate errors.
- Style & Syntax: Use concrete error types (e.g., `thiserror`) for larger projects.

### Problem 19 — Struct Definition
```rust
struct Rectangle { width: u32, height: u32 }
fn main() { let rect = Rectangle { width: 30, height: 50 }; }
```
- Explanation: Structs group related data with named fields.
- Style & Syntax: Use `impl` to add methods and keep data encapsulated.

### Problem 20 — Struct Methods
```rust
struct Rectangle { width: u32, height: u32 }
impl Rectangle {
    fn area(&self) -> u32 { self.width * self.height }
}
```
- Explanation: `impl` defines methods; `&self` borrows immutably.
- Style & Syntax: Use `Self` in associated functions for constructors.

---

## Advanced (21–30)

### Problem 21 — Associated Functions
```rust
struct Point { x: i32, y: i32 }
impl Point { fn new(x: i32, y: i32) -> Point { Point { x, y } } }
```
- Explanation: Associated functions (e.g., `new`) are called with `Point::new()`.
- Style & Syntax: Use field init shorthand `x, y` when variable names match fields.

### Problem 22 — Trait Definition
```rust
trait Drawable { fn draw(&self); fn area(&self) -> f64; }
struct Circle { radius: f64 }
impl Drawable for Circle { /* implement methods */ }
```
- Explanation: Traits define shared behavior; types implement traits.
- Style & Syntax: Prefer trait bounds on generics (`T: Drawable`).

### Problem 23 — Generic Functions
```rust
fn largest<T: PartialOrd + Copy>(list: &[T]) -> T { let mut largest = list[0]; for &item in list { if item > largest { largest = item; } } largest }
```
- Explanation: Generics with trait bounds enable code reuse.
- Style & Syntax: Minimize bounds; prefer references instead of `Copy` when possible.

### Problem 24 — Closures
```rust
fn main() {
    let nums = vec![1,2,3,4,5];
    let doubled: Vec<i32> = nums.iter().map(|x| x * 2).collect();
}
```
- Explanation: Closures are anonymous functions capturing environment variables.
- Style & Syntax: Use iterators + closures for concise data transformations.

### Problem 25 — Error Propagation
```rust
fn parse_and_double(s: &str) -> Result<i32, String> {
    let num = s.parse::<i32>().map_err(|_| "Failed to parse".to_string())?;
    Ok(num * 2)
}
```
- Explanation: `?` returns early on `Err`; `map_err` converts error types.
- Style & Syntax: Use `?` liberally to reduce boilerplate in fallible code.

### Problem 26 — Lifetimes
```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str { if x.len() > y.len() { x } else { y } }
```
- Explanation: Lifetimes (`'a`) tie return reference validity to input lifetimes.
- Style & Syntax: Prefer letting the compiler infer lifetimes when possible.

### Problem 27 — Pattern Matching Advanced
```rust
match point {
    (0,0) => println!("Origin"),
    (x,0) => println!("On x-axis at {}", x),
    (x,y) if x == y => println!("On diagonal"),
    _ => println!("At ({},{})", x, y),
}
```
- Explanation: Match supports guards (`if`) and complex patterns.
- Style & Syntax: Use `match` for clear, exhaustive branching.

### Problem 28 — Enum with Associated Data
```rust
enum Message { Quit, Move { x: i32, y: i32 }, Write(String), Color(i32,i32,i32) }
```
- Explanation: Variants can hold data (named or tuple-like).
- Style & Syntax: Use enums to model state machines or distinct message types.

### Problem 29 — Iterator Adapters
```rust
let result: Vec<i32> = nums.iter().filter(|&&x| x % 2 == 0).map(|&x| x * x).collect();
```
- Explanation: Iterator adapters are lazy and compose efficiently.
- Style & Syntax: Favor iterators over manual loops for transformations.

### Problem 30 — Module System
```rust
mod math { pub fn add(a: i32, b: i32) -> i32 { a + b } }
fn main() { println!("{}", math::add(5,3)); }
```
- Explanation: `mod` groups code; `pub` exposes items outside the module.
- Style & Syntax: Keep modules small and cohesive; use `pub(crate)` for limited visibility.

---

## Expert (31–40)

### Problem 31 — Box
```rust
struct Node { value: i32, next: Option<Box<Node>> }
```
- Explanation: `Box<T>` stores values on the heap, enabling recursive types.
- Style & Syntax: Use `Box` for ownership and simple heap allocation.

### Problem 32 — Rc
```rust
use std::rc::Rc;
let data = Rc::new(vec![1,2,3]);
let ref1 = Rc::clone(&data);
```
- Explanation: `Rc` enables shared ownership in single-threaded contexts.
- Style & Syntax: Check `Rc::strong_count` during debugging; prefer `Arc` for threads.

### Problem 33 — RefCell
```rust
use std::cell::RefCell;
struct Counter { count: RefCell<i32> }
```
- Explanation: `RefCell` allows interior mutability with runtime borrow checks.
- Style & Syntax: Use when compile-time borrowing rules are too strict; avoid overuse.

### Problem 34 — Threads
```rust
use std::thread;
let handle = thread::spawn(|| { /* work */ });
handle.join().unwrap();
```
- Explanation: `thread::spawn` runs code concurrently; `join` waits for completion.
- Style & Syntax: Share data safely with `Arc` + `Mutex` or message passing.

### Problem 35 — Channels
```rust
use std::sync::mpsc;
let (tx, rx) = mpsc::channel();
thread::spawn(move || { tx.send("hi").unwrap(); });
let msg = rx.recv().unwrap();
```
- Explanation: Channels provide safe message passing between threads.
- Style & Syntax: Prefer channels for decoupled concurrency.

### Problem 36 — Mutex
```rust
use std::sync::{Arc, Mutex};
let counter = Arc::new(Mutex::new(0));
```
- Explanation: `Mutex` guards shared state; `Arc` shares ownership across threads.
- Style & Syntax: Keep locked sections short to avoid contention.

### Problem 37 — Trait Objects
```rust
trait Animal { fn speak(&self); }
let animals: Vec<Box<dyn Animal>> = vec![Box::new(Dog), Box::new(Cat)];
```
- Explanation: `dyn Trait` enables heterogeneous collections and dynamic dispatch.
- Style & Syntax: Use `dyn` when behavior needs to be abstract at runtime.

### Problem 38 — Async/Await
```rust
async fn fetch_data(id: i32) -> String { format!("Data for ID: {}", id) }
#[tokio::main]
async fn main() { let r = fetch_data(42).await; }
```
- Explanation: `async` returns a `Future`; `.await` yields the result.
- Style & Syntax: Use an async runtime (e.g., `tokio`) for async executors.

### Problem 39 — Derive Macros
```rust
#[derive(Clone, Debug)]
struct Person { name: String, age: u32 }
```
- Explanation: `derive` auto-implements common traits like `Clone` and `Debug`.
- Style & Syntax: Derive only what you need; implement custom traits when required.

### Problem 40 — Unsafe Code
```rust
unsafe fn unsafe_divide(a: i32, b: i32) -> i32 { a / b }
fn main() { let r = unsafe { unsafe_divide(10,2) }; }
```
- Explanation: `unsafe` allows operations that the compiler can't guarantee as safe.
- Style & Syntax: Isolate `unsafe` code, document invariants, and keep it minimal.

---

## Quick Style & Syntax Tips
- Use immutability by default: `let` not `let mut`.
- Prefer iterators and combinators (`map`, `filter`, `collect`) over manual loops.
- Favor descriptive names and small functions.
- Handle errors explicitly with `Result` and `Option`.
- Keep `unsafe` blocks tiny and well-documented.

---

File merged: expanded solutions copied into `SOLUTIONS.md` from `SOLUTIONS_EXPLAINED.md`.

