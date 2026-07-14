func getConcatenation(nums []int) []int {
    arr_len := len(nums)
    result := make([]int, arr_len * 2)
    for i := 0; i < arr_len; i++ {
        result[i], result[i + arr_len] = nums[i], nums[i]
    }
    return result
}
