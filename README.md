# functional

> Functional JavaScript

### Installation

In a browser e.g.

```html
<script type="module">
import { head } from './array.mjs'

// Get first element
const first = head(['foo', 'bar'])
console.log(first)
// => foo
</script>
```

In Node.js:

The ```--experimental-modules``` flag can be used to enable features for loading ESM modules.

```javascript
$ npm init -y
$ npm i daliborgogic/functional
$ touch index.mjs

// index.mjs
import { last } from './node_modules/functional/array'

// Get last element
const rear = last(['foo', 'bar'])
console.log(rear)

$ node --experimental-modules index.mjs
> bar
```

### Array

`combine(array)` Combine multiple arrays into one array.

`compact(array)` Returns a copy of the array with all falsy values removed.

`contains(array, value)` Returns true if the value is present in the array.

`difference(array, others)` Similar to without, but returns the values from array that are not present in the other arrays.

`head(array)` Gets the first element of `array`.

`initial(array)` Returns everything but the last entry of the array.

`intersection(arrays)` Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.

`last(array)` Returns the last element of an array.

`sortedIndex(array, value)` Determine the index at which the value should be inserted into the array in order to maintain the array's sorted order.

`tail(array)` Returns everything but the first entry of the array.

`toArray(arrayLike)` Returns a real Array. Useful for transmuting the arguments object.

`union(arrays)` Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.

`unique(array)` Produces a duplicate-free version of the array.

`without(array, values)` Returns a copy of the array with all instances of the values removed.

### Object

`getValues(object)` Returns an array with the object's values.

`merge(objects)` Combine multiple objects into a new object.

`toMap(object)`Convert an Object to a Map.

### Math

`min(array)` Returns the minimum value in the array.

`max(array)` Returns the maximum value in the array.

`sum(array)` Returns the sum of all values in the array.

`product(array)` Returns the product of all values in the array.


### Decorators

`not(function)` Creates a new function returning the opposite of the function provided as its argument.

`maybe(function)` Returns a new function that won't execute if not enough arguments are provided.

`once(function)` Returns a new function that won't execute more than once.

`curry(function)` Curries a function.

`pipeline(functions)` Returns the composition of multiple functions from left to right.
