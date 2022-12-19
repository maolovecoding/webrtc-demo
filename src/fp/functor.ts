class Functor<T> {
  private _value: T;
  private constructor(value: T) {
    this._value = value;
  }
  static of<T>(value: T) {
    return new Functor(value);
  }
  map<V>(fn: (value: T) => V) {
    return Functor.of<V>(fn(this.value));
  }
  get value() {
    return this._value;
  }
}

export { Functor };

