export class Venda {
  private _id: number;
  private _id_insumo: number;
  private _id_comprador: number;
  private _data_venda: Date;
  private _valor: number;
  private _peso: number;
  private _responsavel: string;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(
    id: number,
    id_insumo: number,
    id_comprador: number,
    data_venda: Date,
    valor: number,
    peso: number,
    responsavel: string,
    created_at: Date,
    updated_at: Date
  ) {
    this._id = id;
    this._id_insumo = id_insumo;
    this._id_comprador = id_comprador;
    this._data_venda = data_venda;
    this._valor = valor;
    this._peso = peso;
    this._responsavel = responsavel;
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
   * Getter id_insumo
   * @return {number}
   */
  public get id_insumo(): number {
    return this._id_insumo;
  }

  /**
   * Getter id_comprador
   * @return {number}
   */
  public get id_comprador(): number {
    return this._id_comprador;
  }

  /**
   * Getter data
   * @return {Date}
   */
  public get data_venda(): Date {
    return this._data_venda;
  }

  /**
   * Getter valor
   * @return {number}
   */
  public get valor(): number {
    return this._valor;
  }

  /**
   * Getter peso
   * @return {number}
   */
  public get peso(): number {
    return this._peso;
  }

  /**
   * Getter responsavel
   * @return {string}
   */
  public get responsavel(): string {
    return this._responsavel;
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
   * Setter id_insumo
   * @param {number} value
   */
  public set id_insumo(value: number) {
    this._id_insumo = value;
  }

  /**
   * Setter id_comprador
   * @param {number} value
   */
  public set id_comprador(value: number) {
    this._id_comprador = value;
  }

  /**
   * Setter data
   * @param {Date} value
   */
  public set data_venda(value: Date) {
    this._data_venda = value;
  }

  /**
   * Setter valor
   * @param {number} value
   */
  public set valor(value: number) {
    this._valor = value;
  }

  /**
   * Setter peso
   * @param {number} value
   */
  public set peso(value: number) {
    this._peso = value;
  }

  /**
   * Setter responsavel
   * @param {string} value
   */
  public set responsavel(value: string) {
    this._responsavel = value;
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
