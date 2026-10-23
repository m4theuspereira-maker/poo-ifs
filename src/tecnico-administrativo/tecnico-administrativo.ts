import { Pessoa } from '../pessoa/pessoa';
import { Endereco } from '../endereco/endereco';

export abstract class TecnicoAdministrativo extends Pessoa {
  private nacionalidade: string;

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    enderecos: Endereco[],
    nacionalidade: string,
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
    this.matricula = this.gerarMatricula();
    this.nacionalidade = nacionalidade;
  }

  public getNacionalidade(): string {
    return this.nacionalidade;
  }

  public setNacionalidade(nacionalidade: string): void {
    this.nacionalidade = nacionalidade;
  }

  protected gerarMatricula(): number {
    return Math.floor(Math.random() * 9000) + 1000;
  }
}
