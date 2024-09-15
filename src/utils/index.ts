export function generateId() {
  const nums = "0123456789";
  let res = "";
  for (let i = 0; i < 10; i++) {
    res = res + nums.charAt(Math.floor(Math.random() * nums.length));
  }
  return res;
}
