

function* stream() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let iterator = stream();
console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())