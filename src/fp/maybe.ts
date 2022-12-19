export class Maybe<T> {
  private _value: T;
  private constructor(value: T) {
    this._value = value;
  }
  static of<T>(value: T) {
    return new Maybe(value);
  }
  map<V>(fn: (value: T) => V) {
    return this.isNothing() ? Maybe.of<V>(null as any) : Maybe.of<V>(fn(this.value));
  }
  private isNothing() {
    return this.value === undefined || this._value === null;
  }
  get value() {
    return this._value;
  }
}
