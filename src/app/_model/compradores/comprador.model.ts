export class Comprador {
  private _id: number;
  private _nome_empresa: string;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(
    id: number,
    nome_empresa: string,
    created_at: Date,
    updated_at: Date
  ) {
    this._id = id;
    this._nome_empresa = nome_empresa;
    this._created_at = created_at;
    this._updated_at = updated_at;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter nome_empresa
   * @return {string}
   */
  public get nome_empresa(): string {
    return this._nome_empresa;
  }

  /**
   * Getter created_at
   * @return {Date}
   */
  public get created_at(): Date {
    return this._created_at;
  }

  /**
   * Getter updated_at
   * @return {Date}
   */
  public get updated_at(): Date {
    return this._updated_at;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter nome_empresa
   * @param {string} value
   */
  public set nome_empresa(value: string) {
    this._nome_empresa = value;
  }

  /**
   * Setter created_at
   * @param {Date} value
   */
  public set created_at(value: Date) {
    this._created_at = value;
  }

  /**
   * Setter updated_at
   * @param {Date} value
   */
  public set updated_at(value: Date) {
    this._updated_at = value;
  }
}
