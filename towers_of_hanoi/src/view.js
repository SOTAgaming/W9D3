class View {
  constructor(game, rootElement){
    this.game = game;
    this.rootElement = rootElement;
    this.setupTowers();
  }

  clickEvent() {
    this.rootElement.on("click", e1 => {
      let $el1 = $(e1.target);
      this.rootElement.on("click", e2 => {
        let $el2 = $(e2.target);
      

      });  
    });
  }

  movePiece(el1, el2) {
    this.game.move(el1.data("stack"), el2.data("stack"));
  }

  setupTowers() {
    let $ul = $("<ul></ul>").addClass("tower");
    $ul.data("stack", 0);
    $ul.text("first");
    for (let i = 0; i < 3; i++) {
      let $li = $("<li></li>");
      $li.data("size", i);
      $li.text(`${i}`);
      $ul.append($li);
    }
    let $ul2 = $("<ul></ul>").addClass("tower");
    let $ul3 = $("<ul></ul>").addClass("tower");
    $ul2.text("second")
    $ul2.data("stack", 1);
    $ul3.text("third");
    $ul3.data("stack", 2);
    (this.rootElement).append($ul, $ul2, $ul3);
  }

}

module.exports = View;