import { Endereco } from '../endereco/endereco';
import { Professor } from '../professor/professor';

export class VisitanteDocente extends Professor {
  private _instituicaoOrigem: string = '';
  private _areaAtuacao: string = '';
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
    areaAtuacao: string,
    periodoPermanencia: string,
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);

    this._instituicaoOrigem = instituicaoOrigem;
    this._areaAtuacao = areaAtuacao;
    this._periodoPermanencia = periodoPermanencia;
    this.matricula = this.gerarMatricula();
  }

  public get instituicaoOrigem(): string {
    return this._instituicaoOrigem;
  }

  public set instituicaoOrigem(instituicaoOrigem: string) {
    this._instituicaoOrigem = instituicaoOrigem;
  }

  public get areaAtuacao(): string {
    return this._areaAtuacao;
  }

  public set areaAtuacao(areaAtuacao: string) {
    this._areaAtuacao = areaAtuacao;
  }

  public get periodoPermanencia(): string {
    return this._periodoPermanencia;
  }

  public set periodoPermanencia(periodoPermanencia: string) {
    this._periodoPermanencia = periodoPermanencia;
  }

  protected override gerarMatricula(): number {
    return Math.floor(Math.random() * 900000) + 100000;
  }

  public override descreverVinculo(): string {
    return `Visitante docente da instituição ${this._instituicaoOrigem}, área de atuação ${this._areaAtuacao}, permanência ${this._periodoPermanencia}.`;
  }
}
