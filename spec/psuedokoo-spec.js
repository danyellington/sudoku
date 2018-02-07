import { Sudoku } from "./../js/scripts.js";

describe('Sudoku', function(){
  beforeEach(function() {
    var trueSudoku = new Sudoku([7, 3, 5, 6, 1, 4, 8, 9, 2], [8, 4, 2, 9, 7, 3, 5, 6, 1], [9, 6, 1, 2, 8, 5, 3, 7, 4], [2, 8, 6, 3, 4, 9, 1, 5, 7], [4, 1, 3, 8, 5, 7, 9, 2, 6], [5, 7, 9, 1, 2, 6, 4, 3, 8], [1, 5, 7, 4, 9, 2, 6, 8, 3], [6, 9, 4, 7, 3, 8, 2, 1, 5], [3, 2, 8, 5, 6, 1, 7, 4, 9]);
    var falseSudoku = new Sudoku([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9]);
  })


  it ('should return false if there are too few squares filled', function(){
    var badSudoku = new Sudoku([1], [2], [3], [4], [5], [6], [7], [8], [9]);
    expect(badSudoku.check()).toEqual(false);
  })
})