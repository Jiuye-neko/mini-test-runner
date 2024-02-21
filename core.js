let tests = [];
let onlys = [];
let beforeAlls = [];
let beforeEachs = [];
let afterEachs = [];
let afterAlls = [];

export function test(name, callback) {
  tests.push({ name, callback });
}

export const it = test;

test.only = (name, callback) => {
  onlys.push({ name, callback });
};

export function describe(name, callback) {
  callback();
}

export function expect(value) {
  return {
    toBe(expected) {
      if (expected === value) {
      } else {
        throw new Error(`expected:${expected},got:${value}`);
      }
    },
  };
}

export function beforeAll(callback) {
  beforeAlls.push(callback);
}

export function beforeEach(callback) {
  beforeEachs.push(callback);
}

export function afterEach(callback) {
  afterEachs.push(callback);
}

export function afterAll(callback) {
  afterAlls.push(callback);
}

export function run() {
  for (const beforeAllCallback of beforeAlls) {
    beforeAllCallback();
  }

  const suits = onlys.length > 0 ? onlys : tests;
  for (const test of suits) {
    for (const beforeEachCallback of beforeEachs) {
      beforeEachCallback();
    }
    try {
      test.callback();
      console.log('ok');
    } catch (error) {
      console.log('fail: ', error);
    }

    for (const afterEachCallback of afterEachs) {
      afterEachCallback();
    }
  }
  for (const afterAllCallback of afterAlls) {
    afterAllCallback();
  }
}
