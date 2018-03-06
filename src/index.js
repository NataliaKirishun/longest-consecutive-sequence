module.exports = function longestConsecutiveLength(array) {
     let length=array.length;
    if (length === 0) {
        return 0;
    }
    let set = new Set(array),
        max=1;

    for (let i = 0; i < length; i++) {
        let left = array[i] - 1,
            right = array[i] + 1,
            count = 1;

        while (set.has(left)) {
            count++;
            set.delete(left);
            left--;
        }

        while (set.has(right)) {
            count++;
            set.delete(right);
            right++;
        }

       if (count>max) max=count;
    }
    return max;
}
