import { Endereco } from '../endereco/endereco';
import { Aluno } from '../aluno/aluno';

export class VisitanteDiscente extends Aluno {
  private _instituicaoOrigem: string = '';
  private _cursoOrigem: string = '';
  private _periodoPermanencia: string = '';

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    enderecos: Endereco[],
    instituicaoOrigem: string,
    cursoOrigem: string,
    periodoPermanencia: string,
  ) {
    super(
      nome,
      sobrenome,
      sexo,
      CPF,
      idade,
      brasileiro,
      enderecos,
      cursoOrigem,
      'Visitante',
    );

    this._instituicaoOrigem = instituicaoOrigem;
    this._cursoOrigem = cursoOrigem;
    this._periodoPermanencia = periodoPermanencia;
    this.matricula = this.gerarMatricula();
  }

  public get instituicaoOrigem(): string {
    return this._instituicaoOrigem;
  }

  public set instituicaoOrigem(instituicaoOrigem: string) {
    this._instituicaoOrigem = instituicaoOrigem;
  }

  public get cursoOrigem(): string {
    return this._cursoOrigem;
  }

  public set cursoOrigem(cursoOrigem: string) {
    this._cursoOrigem = cursoOrigem;
  }

  public get periodoPermanencia(): string {
    return this._periodoPermanencia;
  }

  public set periodoPermanencia(periodoPermanencia: string) {
    this._periodoPermanencia = periodoPermanencia;
  }

  protected override gerarMatricula(): number {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  public override descreverVinculo(): string {
    return `Visitante discente da instituição ${this._instituicaoOrigem}, curso de origem ${this._cursoOrigem}, permanência ${this._periodoPermanencia}.`;
  }
}
