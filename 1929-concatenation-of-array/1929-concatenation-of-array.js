/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    nums=[...nums,...nums];
    return nums;
};