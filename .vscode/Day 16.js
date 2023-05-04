let count = 10;

const one = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const two = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const three = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const four = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count);
};
const five = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const six = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const seven = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const eight = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const nine = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const ten = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
ten(count, () =>
  nine(count, () => eight(count, () => seven(count, () => six(count,()=> five(count,()=> four(count,()=> three(count,()=> two(count,()=> one(count)))))))))
);
console.log(count);