function convertToRoman(num) {
  if (num < 1 || num > 3999) {
    return "Number out of range. Enter a number between 1 and 3999.";
  }
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];
let result = "";
for (const { value, numeral } of romanNumerals) {
  while (num >= value) {
    result += numeral;
    num -= value;
  }
}
  return result;
}

// Test the function
console.log(convertToRoman(36));   // Output: XXXVI
console.log(convertToRoman(3999)); // Output: MMMCMXCIX

