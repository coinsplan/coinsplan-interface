export default class Token {
  public address: string;
  public name: string;
  public symbol: string;
  public decimal: number;
  constructor(
    _symbol: string,
    _name: string,
    _decimal: number,
    _address: string
  ) {
    this.address = _address;
    this.symbol = _symbol;
    this.name = _name;
    this.decimal = _decimal;
  }
}
