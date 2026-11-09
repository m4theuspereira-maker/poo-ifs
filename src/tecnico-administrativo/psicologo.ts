import { Endereco } from '../endereco/endereco';
import { TecnicoAdministrativo } from './tecnico-administrativo';

export class Psicologo extends TecnicoAdministrativo {
  private _CRP: number = 0;

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    enderecos: Endereco[],
    nacionalidade: string,
    CRP: number,
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
    this._CRP = CRP;
  }

  public get CRP(): number {
    return this._CRP;
  }

  public set CRP(value: number) {
    this._CRP = value;
  }
}
