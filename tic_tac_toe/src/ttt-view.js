class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {
    let $board = $("ul.board");
    $board.on("click", (e) => {
    let $el = $(e.target);
    if (!this.game.isOver()) {
      this.makeMove($el);
    }
    });
  }

  makeMove($square) {
    if (!this.game.board.isEmptyPos($square.data("pos"))) return;
    $square.text(this.game.currentPlayer);
    this.game.board.placeMark($square.data("pos"), this.game.currentPlayer);
    $square.addClass(this.game.currentPlayer);
    if (this.game.board.winner()) {
      let message = `${this.game.currentPlayer} has won!`;
      let $header = $("h1");
      $header.text(message);
    } else {
      this.game.swapTurn();
    }
  }

  setupBoard() {
    let $ul = $("<ul></ul>").addClass("board");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li></li>");
        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
    (this.$el).append($ul);
  }


}

module.exports = View;
