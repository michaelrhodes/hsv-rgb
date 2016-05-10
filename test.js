var test = require('tape')
var rgb = require('./index')

test('it works', function (assert) {
  assert.plan(3)
  assert.deepEqual(rgb(36, 76, 86), [219, 153, 53])
  assert.deepEqual(rgb(156, 76, 86), [53, 219, 153])
  assert.deepEqual(rgb(204, 76, 86), [53, 153, 219])
})
