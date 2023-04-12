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
