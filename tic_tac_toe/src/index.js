const View = require("./ttt-view");
const Game = require("./game");
const Board = require("./board");

  $(() => {
    let game = new Game();
    let $grid = $("figure");
    let view = new View(game, $grid);
    view.bindEvents();
  });
