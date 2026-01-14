// Problem 14: String Slices
//
// Learn: Slices, references to part of data
//
// TASK: Work with string slices

fn main() {
    // TODO: Create a String
    let s = String::from("hello world");
    
    // TODO: Create slices
    // let hello = &s[0..5];    // inclusive start, exclusive end
    // let world = &s[6..11];
    
    // TODO: Print the slices
    
    // KEY LEARNING:
    // - Slice syntax: &s[start..end]
    // - Start: inclusive, End: exclusive
    // - Slice is reference to part of String
    // - Can't modify String while slice exists
    
    // BONUS CHALLENGES:
    // 1. Try getting slices that go out of bounds - compiler error!
    // 2. Use word_boundary function (below)
    // 3. Array slices: let arr = [1,2,3,4,5]; let slice = &arr[1..4];
    // 4. Understand borrow checker: why can't you modify s if slice exists?
}

// TODO: Write function that returns first word as slice
fn first_word(s: &String) -> &str {
    // Hint: find first space, return slice up to it
    // let bytes = s.as_bytes();
    // for (i, &item) in bytes.iter().enumerate() {
    //     if item == b' ' {
    //         return &s[0..i];
    //     }
    // }
    // &s[..]
}

/*
Expected Output:
hello: hello
world: world
*/
