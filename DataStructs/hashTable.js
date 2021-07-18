class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // push arr with key and value
    this.keyMap[index].push([key, value]);
    return value;
  }
  get(key) {
    const index = this._hash(key);
    const valuesArr = this.keyMap[index];

    if (!valuesArr) return;
    for (let i = 0; i < valuesArr.length; i++) {
      if (valuesArr[i][0] === key) return valuesArr[i][1];
    }
  }
  values() {
    const storedValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(el => {
          if (!storedValues.includes(el[1])) {
            storedValues.push(el[1]);
          }
        });
      }
    }
    return storedValues;
  }
  keys() {
    const storedKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(el => {
          storedKeys.push(el[0]);
        });
      }
    }
    return storedKeys;
  }
}

const ht = new HashTable();
ht.set("hello", "world");
ht.set("french", "fries");
ht.set("french1", "fries");
ht.set("french2", "fries");
ht.set("green", "#00ff00");
console.log(ht.get("hello"));
console.log(ht.values());
console.log(ht.keys());
// console.log(ht.keyMap);
