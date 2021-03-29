function resetOnReachOverflow(num, { max, min }) {
  console.log(num, `max: ${max}   min: ${min}`);
  if (num < min) return max;
  if (num > max) return min;
  return num;
}
export { resetOnReachOverflow };
