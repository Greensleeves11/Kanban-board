export default class Lists {
  static listOfCards;
  static listOfColors;

  static findIndexById(id) {
    let index;
    for (let i = 0; i < Lists.listOfCards.length; i++) {
      if (Lists.listOfCards[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }

  static assignColumnValue(target, id) {
    const index = this.findIndexById(id);
    if (target.classList.contains('col-to-do')) {
      Lists.listOfCards[index].column = 1;
    } else if (target.classList.contains('col-in-progress')) {
      Lists.listOfCards[index].column = 2;
    } else if (target.classList.contains('col-done')) {
      Lists.listOfCards[index].column = 3;
    }
  }
}
