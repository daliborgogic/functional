# functional

> Functional JavaScript

### Installation

In a browser e.g.

```html
<script type="module">
import { head } from './array.mjs'

console.log(head(['foo', 'bar']))
</script>
```

In Node.js:

The ```--experimental-modules``` flag can be used to enable features for loading ESM modules.

```javascript
$ npm init -y
$ npm i daliborgogic/functional
$ touch index.mjs

// index.mjs
import { head } from './node_modules/functional/array'

console.log(head(['foo', 'bar']))

$ node --experimental-modules index.mjs
> foo
```

### combine(arrays)

Combine multiple arrays into one array.

```javascript
combine(['foo'], ['bar', 'baz'], [1, 2]) // => ['foo', 'bar', 'baz', 1, 2]
```

### compact(array)

Returns a copy of the array with all falsy values removed.

```javascript
compact([0, 1, false, 2, '', 3]) // => [1, 2, 3]
```

### contains(array, value)

Returns true if the value is present in the array.

```javascript
contains([1, 2, 3], 3) // => true
```

### difference(array, others)

Similar to without, but returns the values from array that are not present in the other arrays.

```javascript
difference([1, 2, 3, 4, 5], [5, 2, 10]) // => [1, 3, 4]
```

~~head(array)~~ comments are in ```array.mjs```

### initial(array)

Returns everything but the last entry of the array.

```javascript
initial([3, 2, 1]) // => [3, 2]
```

### intersection(arrays)

Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.

```javascript
intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) // => [1, 2]
```

### last(array)
Returns the last element of an array.

```javascript
last(['foo', 'bar' ]) // => 'bar'
```
### sortedIndex(array, value)
Determine the index at which the value should be inserted into the array in order to maintain the array's sorted order.

```javascript
sortedIndex([10, 20, 30, 40, 50], 35) // => 3
```
### tail(array)
Returns everything but the first entry of the array.

```javascript
tail(['foo', 'bar', 'baz']) // => ['bar', 'baz']
```
### toArray(arrayLike)
Returns a real Array. Useful for transmuting the arguments object.

```javascript
Array.isArray((() => toArray(arguments))('foo', 'bar')) // => true
```
### union(arrays)
Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.

```javascript
union([1, 2, 3], [101, 2, 1, 10], [2, 1]) // => [1, 2, 3, 101, 10]
```
### unique(array)
Produces a duplicate-free version of the array.

```javascript
unique([1, 2, 1, 3, 1, 4]) // => [1, 2, 3, 4]
```
### without(array, values)
Returns a copy of the array with all instances of the values removed.

```javascript
without([1, 2, 1, 0, 3, 1, 4], 0, 1) // => [2, 3, 4]
```
### getValues(object)
Returns an array with the object's values.

```javascript
getValues({ foo: 'bar', hello: 'world' }) // => ['bar', 'world']
```
### merge(objects)
Combine multiple objects into a new object.

```javascript
merge({ foo: 'bar' }, { hello: 'world' }) // => { foo: 'bar', hello: 'world' }
```
### toMap(object)
Convert an Object to a Map.

```javascript
toMap({ name: 'Dalibor', age: 40 }) // => Map { name: 'Dalibor', age: 40 }
```
### min(array)
Returns the minimum value in the array.

```javascript
min([10, 50, 30]) // => 10
```
### max(array)
Returns the maximum value in the array.

```javascript
max([10, 50, 30]) // => 50
```
### sum(array)
Returns the sum of all values in the array.

```javascript
sum([1, 2, 3]) // => 6
```
### product(array)
Returns the product of all values in the array.

```javascript
product([2, 5, 10]) // => 100
```
### not(function)
Creates a new function returning the opposite of the function provided as its argument.

```javascript
const isNull = x => x == null
const isSet = not(isNull)
isSet(undefined) // => false
```
### maybe(function)
Returns a new function that won't execute if not enough arguments are provided.
```javascript
let greet = (message, name) => console.log(message + ' ' + name)
let safeGreet = requireArguments(greet)

greet('Hi') // => 'Hi undefined'
safeGreet('Hi') // => Doesn't execute
```
### once(function)
Returns a new function that won't execute more than once.
```javascript
const greet = () => console.log('Hi')
const greetOnce = once(greet)
greetOnce() // => 'Hi'
greetOnce() // => Doesn't execute
```
### curry(function)
Curries a function.
```javascript
const add = curry((a, b) => a + b)
add(2, 3) // => 5
add(2)(3) // => 5
```
### pipeline(functions)
Returns the composition of multiple functions from left to right.

```javascript
const plus1 = a => a + 1
const mult2 = a => a * 2
let addThenMult = pipeline(plus1, mult2)
addThenMult(5) // => 12
```
