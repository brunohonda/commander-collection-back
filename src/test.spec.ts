import { equal } from 'assert';
import { suite, test } from 'mocha';

suite('Test framework', () => {
  test('should unit test runnig', () => equal(true, true));
});
