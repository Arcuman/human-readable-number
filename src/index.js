module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ]

    const two = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ]
    if (number < 20) {
        return ones[number];
    }
    if (number < 100) {
        if (number % 10 == 0)
            return two[number / 10];
        return (
            two[parseInt(number / 10)] + " " + ones[number % 10]
        )
    }
    let numString = number.toString();
    if (numString[1] === "0" && numString[2] === "0")
        return ones[numString[0]] + " hundred";
    else {
        return (
            ones[numString[0]] +
            " hundred " +
            toReadable(parseInt(numString[1] + numString[2]))
        );
    }
}
