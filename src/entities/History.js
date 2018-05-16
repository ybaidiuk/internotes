export default class History {
  constructor() {
    /**
     stack of history elements
     */
    this.arr = [];
    /**
     index points to the last inserted element, if the last performed
     operation was a push.
     */
    this.index = -1;
  }

  //region ELEMENT MANAGEMENT
  pushToStack(currentState) {
    this.arr.splice(this.index + 1);
    this.arr.push(currentState);
    this.index++;
    // console.log(this.index);
  }

  //endregion

  //region TRAVERSING THROUGH STATES
  undo() {
    if (this.index === -1) return null;
    this.index--;
    // console.log(this.index);
    // console.log(this.arr[this.index]);
    return this.arr[this.index];
  }

  redo() {
    if (this.index === this.arr.length - 1) return null;
    this.index++;
    // console.log(this.index);
    // console.log(this.arr[this.index]);
    return this.arr[this.index];
  }

  //endregion
}
