function wrapInArray<T>(value: T): T[] {
    return [value];

}

wrapInArray(42); // Returns: [42]
wrapInArray("Hello"); // Returns: ["Hello"]
wrapInArray({ name: "Alice", age: 30 });

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair(1, "one"); // Returns: [1, "one"]
pair(true, { name: "Alice" }); // Returns: [true, { name: "Alice" }]

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "Hello" };

interface ApiPromise<T> {
    status: number;
    data: T;
}

const res: ApiPromise<{ flavour: string }> = {
    status: 200,
    data: { flavour: "Masala" }
}