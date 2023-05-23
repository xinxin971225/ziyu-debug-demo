let arr = [4, 23, 100, 9, 7, 49, 36, 56];

console.log("最终数据：", arr);

for (let i = 0; i < arr.length - 1; i++) {
  // 确定轮数
  for (let j = 0; j < arr.length - i - 1; j++) {
    //确定每次比较的次数
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  throw Error();
  console.log("第" + i + "次排序" + arr);
}

console.log("原始数据：", arr);

const _pending = "PENDING";
const _fulfilled = "FULFILLED";
const _rejected = "REJECTED";

const resolvePromise = (returnPromise, x, resolve, reject) => {
  // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  let called;
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(returnPromise, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
};

export class MyPromise {
  constructor(fn) {
    this.status = _pending;
    this.reason = undefined;
    this.value = undefined;

    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    const resolve = (value) => {
      this.status = _fulfilled;
      this.value = value;
      this.onResolveCallbacks.forEach((fn) => fn());
    };
    const reject = (reason) => {
      this.status = _rejected;
      this.reason = reason;
      this.onRejectCallbacks.forEach((fn) => fn());
    };

    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onResolve, onReject) {
    const onResolveCallBack =
      typeof onResolve === "function" ? onResolve : (v) => v;
    const onRejectCallBack =
      typeof onReject === "function"
        ? onReject
        : (e) => {
            throw e;
          };
    let returnPromise = new Promise((resolve, reject) => {
      if (this.status === _fulfilled) {
        setTimeout(() => {
          try {
            const x = onResolveCallBack(this.value);
            resolvePromise(returnPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === _rejected) {
        setTimeout(() => {
          try {
            const x = onRejectCallBack(this.reason);
            resolvePromise(returnPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }

      if (this.status === _pending) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onResolveCallBack(this.value);
              resolvePromise(returnPromise, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejectCallBack(this.reason);
              resolvePromise(returnPromise, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });

    return returnPromise;
  }
}
