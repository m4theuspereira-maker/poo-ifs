import { Endereco } from '../endereco/endereco';
import type { UsuarioBiblioteca } from '../interfaces/usuario-biblioteca';

export class EmprestimoLivro {
  private _titulo: string = '';
  private _usuario: UsuarioBiblioteca;
  private _enderecoUnidade: Endereco;
  private _dataEmprestimo: Date;
  private _dataPrevistaDevolucao: Date;

  constructor(
    titulo: string,
    usuario: UsuarioBiblioteca,
    enderecoUnidade: Endereco,
    dataEmprestimo: Date,
    dataPrevistaDevolucao: Date,
  ) {
    this._titulo = titulo;
    this._usuario = usuario;
    this._enderecoUnidade = enderecoUnidade;
    this._dataEmprestimo = dataEmprestimo;
    this._dataPrevistaDevolucao = dataPrevistaDevolucao;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public set titulo(titulo: string) {
    this._titulo = titulo;
  }

  public get usuario(): UsuarioBiblioteca {
    return this._usuario;
  }

  public set usuario(usuario: UsuarioBiblioteca) {
    this._usuario = usuario;
  }

  public get enderecoUnidade(): Endereco {
    return this._enderecoUnidade;
  }

  public set enderecoUnidade(enderecoUnidade: Endereco) {
    this._enderecoUnidade = enderecoUnidade;
  }

  public get dataEmprestimo(): Date {
    return this._dataEmprestimo;
  }

  public set dataEmprestimo(dataEmprestimo: Date) {
    this._dataEmprestimo = dataEmprestimo;
  }

  public get dataPrevistaDevolucao(): Date {
    return this._dataPrevistaDevolucao;
  }

  public set dataPrevistaDevolucao(dataPrevistaDevolucao: Date) {
    this._dataPrevistaDevolucao = dataPrevistaDevolucao;
  }

  public processar(): string {
    if (!this._usuario.podeEmprestar()) {
      throw new Error(`${this._usuario.identificar()} não está apto para realizar empréstimo.`);
    }

    return `Empréstimo processado para ${this._usuario.identificar()} do livro ${this._titulo}.`;
  }
}
