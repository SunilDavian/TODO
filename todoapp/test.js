function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    console.log("n--------",n);
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5000));