import test from 'ava'

import {
  getValues
  // ToDo merge,
  // ToDo toMap
} from './../object'

test('getValues', t =>
  t.deepEqual(getValues({ foo: 'bar', hello: 'world' }), ['bar', 'world'])
)
