export class Fornecedor {
  private _id: number;
  private _nome: string;
  private _empresa: boolean;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(
    id: number,
    nome: string,
    empresa: boolean,
    created_at: Date,
    updated_at: Date
  ) {
    this._id = id;
    this._nome = nome;
    this._empresa = empresa;
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
   * Getter nome
   * @return {string}
   */
  public get nome(): string {
    return this._nome;
  }

  /**
   * Getter empresa
   * @return {boolean}
   */
  public get empresa(): boolean {
    return this._empresa;
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
   * Setter nome
   * @param {string} value
   */
  public set nome(value: string) {
    this._nome = value;
  }

  /**
   * Setter empresa
   * @param {boolean} value
   */
  public set empresa(value: boolean) {
    this._empresa = value;
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
