/**
 * tag:动态规划
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // dp[i][j]的含义为i，j位置上的最小路径和
    let m=grid.length,n=grid[0].length

    let dp=new Array(m).fill(0).map(()=>new Array(n))
    dp[0][0]=grid[0][0]
    for(let i=1;i<m;i++) dp[i][0]=grid[i][0]+dp[i-1][0]
    for(let j=1;j<n;j++) dp[0][j]=grid[0][j]+dp[0][j-1]
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
        }
    }
    // return dp[m-1][n-1]
    return dp.pop().pop()
};