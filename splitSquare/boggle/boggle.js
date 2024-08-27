function find(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index, visited) {
        // If we've found the word, return true
        if (index === word.length) return true;

        // If out of bounds, or the letter doesn't match, or the cell is already visited, return false
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index] || visited[row][col]) {
            return false;
        }

        // Mark the cell as visited
        visited[row][col] = true;

        // Explore all 4 possible directions: North, East, West, South
        const directions = [
            [-1, 0], // North
            [1, 0],  // South
            [0, -1], // West
            [0, 1],  // East
        ];

        for (const [dRow, dCol] of directions) {
            if (dfs(row + dRow, col + dCol, index + 1, visited)) {
                return true;
            }
        }

        // Backtrack: unmark the cell as visited
        visited[row][col] = false;

        return false;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Create a visited matrix to track the visited cells
            const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
            
            // Start DFS from each cell that matches the first letter of the word
            if (board[row][col] === word[0] && dfs(row, col, 0, visited)) {
                return true;
            }
        }
    }

    return false;
}

// EXAMPLE TESTS

const board = makeBoard(`N C A N E
                         O U I O P
                         Z Q Z O N
                         F A D P L
                         E D E A Z`);

console.log(find(board, "NOON")); // true
console.log(find(board, "NOPE")); // true
console.log(find(board, "CANON")); // false
console.log(find(board, "QUINE")); // false
console.log(find(board, "FADED")); // true

const board2 = makeBoard(`E D O S Z
                          N S O N R
                          O U O O P
                          Z Q Z O R
                          F A D P L`);

console.log(find(board2, "NOOOOS")); // true
