export default class History {
  constructor(limit) {
    /**
     stack of history elements
     */
    this.arr = [];
    /**
     index points to the last inserted element, if the last performed
     operation was a push.
     */
    this.index = -1;
    this.textGetter = null;
    this.interval = null;
    this.limit = limit;
  }

  //region TIMER RELATED
  startTimer(time, textGetter) {
    this.textGetter = textGetter;
    this.interval = setInterval(this.pushToStack.bind(this), time);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  pushToStack() {
    const text = this.textGetter();
    // Check if there are changes
    if (text === this.arr[this.index]) return;

    // Cut elements after current index, if any
    this.arr.splice(this.index + 1);
    //push text to stack
    this.arr.push(text);
    this.index++;
    console.log('has changes', this.arr);

    // Remove oldest element, if array longer than limit
    if (this.arr.length >= this.limit) {
      this.arr.shift();
      //todo bug after max limit . text always new .
    }
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
