export class Insumo {
  private _id: number;
  private _nome_insumo: string;
  private _id_fornecedor: number;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(
    id: number,
    nome_insumo: string,
    id_fornecedor: number,
    created_at: Date,
    updated_at: Date
  ) {
    this._id = id;
    this._nome_insumo = nome_insumo;
    this._id_fornecedor = id_fornecedor;
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
   * Getter nome_insumo
   * @return {string}
   */
  public get nome_insumo(): string {
    return this._nome_insumo;
  }

  /**
   * Getter id_fornecedor
   * @return {number}
   */
  public get id_fornecedor(): number {
    return this._id_fornecedor;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter nome_insumo
   * @param {string} value
   */
  public set nome_insumo(value: string) {
    this._nome_insumo = value;
  }

  /**
   * Setter id_fornecedor
   * @param {number} value
   */
  public set id_fornecedor(value: number) {
    this._id_fornecedor = value;
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
