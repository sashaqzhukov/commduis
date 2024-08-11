class Example {
    constructor(key) {
        this.value = this.map = this.newMap(key);
    }

    newMap(key) {
        // Assuming you want to create a Map object with the key provided
        let map = new Map();
        map.set(key, null); // or some initial value
        return map;
    }
}

// Usage
let example = new Example('myKey');
console.log(example.value); // Map { 'myKey' => null }
console.log(example.map);   // Map { 'myKey' => null }
