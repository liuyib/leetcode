/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 *
 * https://leetcode-cn.com/problems/max-area-of-island/description/
 *
 * @tags 'DFS' 'Backtracking'
 *
 * 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
 *
 * 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被
 * 0（代表水）包围着。
 *
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
 *
 * 示例 1:
 *
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 *  ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  ⁠[0,1,1,0,1,0,0,0,0,0,0,0,0],
 *  ⁠[0,1,0,0,1,1,0,0,1,0,1,0,0],
 *  ⁠[0,1,0,0,1,1,0,0,1,1,1,0,0],
 *  ⁠[0,0,0,0,0,0,0,0,0,0,1,0,0],
 *  ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  ⁠[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 *
 * 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。
 *
 * 示例 2:
 *
 * [[0,0,0,0,0,0,0,0]]
 *
 * 对于上面这个给定的矩阵, 返回 0。
 *
 * 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (grid.length === 0) return false;
  if (grid[0].length === 0) return false;

  const row = grid.length;
  const col = grid[0].length;
  // 标记数组
  const marked = [...Array(row)].map(() => Array(col).fill(false));
  // 搜索到的最大面积
  let maxArea = 0;
  // 当前正在搜索的面积
  let curArea = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      maxAreaOfIsland_DFS(i, j);
      maxArea = Math.max(maxArea, curArea);
      curArea = 0;
    }
  }

  return maxArea;

  function maxAreaOfIsland_DFS(i, j) {
    // 越界、标记过
    if (i < 0 || i >= row || j < 0 || j >= col || marked[i][j]) return false;
    if (grid[i][j] !== 1) return false;

    marked[i][j] = true;
    curArea += 1;

    maxAreaOfIsland_DFS(i, j + 1);
    maxAreaOfIsland_DFS(i + 1, j);
    maxAreaOfIsland_DFS(i, j - 1);
    maxAreaOfIsland_DFS(i - 1, j);
  }
};
// @lc code=end
