function bingo(input) {
  const [rawNumbers, ...rawBoards] = input.split('\n\n')

  const boards = rawBoards.map((board) => {
    return board.split('\n').map((row) => row.match(/\d{1,2}/g))
  })

  const boardMemos = []

  for (const board of boards) {
    const boardMemo = new Map()

    for (let x = 0; x < board.length; ++x) {
      for (let y = 0; y < board[x].length; ++y) {
        boardMemo.set(board[x][y], { x, y })
      }
    }

    boardMemos.push(boardMemo)
  }

  for (const lookup of rawNumbers.split(',')) {
    for (const [i, board] of Object.entries(boards)) {
      const location = boardMemos[i].get(lookup)
      if (!location) continue
      board[location.x][location.y] = null

      for (const row of board) {
        if (!row.some(Boolean)) {
          return (
            parseInt(lookup, 10) *
            board
              .flat()
              .filter(Boolean)
              .reduce((total, cur) => parseInt(cur, 10) + total, 0)
          )
        }
      }
    }
  }
}
