import { Endereco } from '../endereco/endereco';
import { TecnicoAdministrativo } from './tecnico-administrativo';

export class Bibliotecario extends TecnicoAdministrativo {
  private _CRB: number = 0;

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    enderecos: Endereco[],
    nacionalidade: string,
    CRB: number,
  ) {
    super(
      nome,
      sobrenome,
      sexo,
      CPF,
      idade,
      brasileiro,
      enderecos,
      nacionalidade,
    );
    this._CRB = CRB;
  }

  public get CRB(): number {
    return this._CRB;
  }

  public set CRB(value: number) {
    this._CRB = value;
  }
}
