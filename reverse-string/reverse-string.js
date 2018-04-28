function reverseString(input) {
    // return input
    //     .split('')
    //     .reverse()
    //     .join('');
    if (input.length <= 1) {
        return input;
    }

    return input[input.length - 1] + reverseString(input.slice(0, input.length - 1));
}

module.exports = reverseString;
