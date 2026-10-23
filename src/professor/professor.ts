import { Endereco } from '../endereco/endereco';
import { Pessoa } from '../pessoa/pessoa';
import type { Campus } from '../campus/campus';

export class Professor extends Pessoa {
  private _campus?: Campus;

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    enderecos: Endereco[],
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
  }

  public get campus(): Campus | undefined {
    return this._campus;
  }

  public set campus(campus: Campus | undefined) {
    this._campus = campus;
  }
}
