export function sum(a: number, b: number): number {
    return a + b;
}

function foo(username: string) {
    console.log("hello: ", username);
}

export function bar() {
    foo("hello");
}
