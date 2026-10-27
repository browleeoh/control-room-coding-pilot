export function clamp(value, min, max) {
  if (
    typeof value !== "number" ||
    typeof min !== "number" ||
    typeof max !== "number" ||
    !Number.isFinite(value) ||
    !Number.isFinite(min) ||
    !Number.isFinite(max)
  ) {
    throw new TypeError("clamp expects finite numeric arguments");
  }

  if (min > max) {
    throw new RangeError("min cannot exceed max");
  }

  if (value < min) return min;
  if (value > max) return max;
  return value;
}