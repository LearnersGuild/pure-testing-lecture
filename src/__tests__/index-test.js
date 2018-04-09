import test from 'tape-async'
import {theAnswer} from '../index'

test('theAnswer', t => {
  t.equal(theAnswer(), 42)
  t.end()
})
