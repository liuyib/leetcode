/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * 作者：liuyib <https://github.com/liuyib>
 * 日期：2020-08-05
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * @tags 'Backtracking' '看的题解'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * 示例：
 *
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  dfs(0, 0, "");
  return res;

  /**
   * DFS
   * @param {number} l 左括号的数目（l <= n）
   * @param {number} r 右括号的数目（r <= n）
   * @param {string} s 合法的括号字符串
   */
  function dfs(l, r, s) {
    // 左括号的数目必须大于等于右括号的数目
    if (l < r) return false;
    if (l === n && r === n) {
      res.push(s);
      return true;
    }

    if (l < n) dfs(l + 1, r, s + "(");
    if (r < n) dfs(l, r + 1, s + ")");
  }
};
// @lc code=end
