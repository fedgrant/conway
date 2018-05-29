fn main() {
    let state = vec![ vec![0i8; 10]; 10];
    // println!("state {:?}", state);

    for i in &mut state.enumerate() {
        // for j in state[i].enumerate() {
            println!("{:?}", state[i])
        // }
    }
}
