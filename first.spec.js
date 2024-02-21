import {
  test,
  it,
  expect,
  run,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
} from './core.js';

// test it
// expect toBe
// test.only
// 提示是否通过或报错
// beforeAll beforeEach afterEach afterAll
// describe

beforeAll(() => {
  console.log('before all');
});

beforeEach(() => {
  console.log('before each');
});

afterEach(() => {
  console.log('after each');
});

afterAll(() => {
  console.log('after all');
});

test('first test', () => {
  console.log('test callback');
  expect(1).toBe(1);
  // expect(1).toBe(2);
});

it('first it', () => {
  console.log('it callback');
});

describe('describe', () => {
  it('inside describe', () => {
    console.log('inside describe it');
  });
});

run();
