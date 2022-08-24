class Stack {
  constructor() {
    this._storage = {};
    this.length = 0;
  }

  push(value) {
    this._storage = {
      [this._storage.length]: value,
    };
    this.length += 1;
    return;
  }

  pop() {
    let elem = this._storage[this.length - 1];
    delete this._storage[this.length - 1];
    this.length -= 1;
    return elem;
  }

  peek() {
    return this._storage[this.length - 1];
  }
}
