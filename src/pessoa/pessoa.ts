import { Endereco } from '../endereco/endereco';

export abstract class Pessoa {
  protected nome: string;
  protected sobrenome: string;
  protected sexo: string;
  protected CPF: string;
  protected idade: number;
  protected brasileiro: boolean;
  protected enderecos: Endereco[];
  protected matricula: number;

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    enderecos: Endereco[],
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.CPF = CPF;
    this.idade = idade;
    this.brasileiro = brasileiro;
    this.enderecos = enderecos;
    this.matricula = 0;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getSobrenome(): string {
    return this.sobrenome;
  }

  public setSobrenome(sobrenome: string): void {
    this.sobrenome = sobrenome;
  }

  public getMatricula(): number {
    return this.matricula;
  }

  public setMatricula(matricula: number): void {
    this.matricula = matricula;
  }
}
