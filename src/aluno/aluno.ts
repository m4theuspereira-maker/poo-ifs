import { Endereco } from '../endereco/endereco';
import { Pessoa } from '../pessoa/pessoa';
import type { Evento } from '../evento/evento';
import type { UsuarioBiblioteca } from '../interfaces/usuario-biblioteca';

export class Aluno extends Pessoa implements UsuarioBiblioteca {
  private _curso: string = '';
  private _situacaoMatricula: string = '';
  private _matriculaAtiva: boolean = true;
  private _eventosInscritos: Array<Evento> = [];

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    enderecos: Endereco[],
    curso: string = '',
    situacaoMatricula: string = '',
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
    this._curso = curso;
    this._situacaoMatricula = situacaoMatricula;
    this._matriculaAtiva = situacaoMatricula.toLowerCase() !== 'inativa';
  }

  public get curso(): string {
    return this._curso;
  }

  public set curso(curso: string) {
    this._curso = curso;
  }

  public get situacaoMatricula(): string {
    return this._situacaoMatricula;
  }

  public set situacaoMatricula(situacaoMatricula: string) {
    this._situacaoMatricula = situacaoMatricula;
    this._matriculaAtiva = situacaoMatricula.toLowerCase() !== 'inativa';
  }

  public get matriculaAtiva(): boolean {
    return this._matriculaAtiva;
  }

  public set matriculaAtiva(matriculaAtiva: boolean) {
    this._matriculaAtiva = matriculaAtiva;
  }

  public get eventosInscritos(): Array<Evento> {
    return this._eventosInscritos;
  }

  public set eventosInscritos(eventosInscritos: Array<Evento>) {
    this._eventosInscritos = eventosInscritos;
  }

  public adicionarEvento(evento: Evento): void {
    if (this._eventosInscritos.includes(evento)) {
      throw new Error('Aluno já está inscrito neste evento.');
    }

    evento.adicionarParticipante(this);
    this._eventosInscritos.push(evento);
  }

  public listarEventosInscritos(): Array<Evento> {
    return [...this._eventosInscritos];
  }

  public ListarEventosInscritos(): Array<Evento> {
    return this.listarEventosInscritos();
  }

  public identificar(): string {
    return `${this.getNome()} ${this.getSobrenome()} - matrícula ${this.getMatricula()}`;
  }

  public podeEmprestar(): boolean {
    return this._matriculaAtiva;
  }

  protected gerarMatricula(): number {
    return Math.floor(Math.random() * 9000000) + 1000000;
  }

  public descreverVinculo(): string {
    return `Aluno regular do curso ${this._curso} com situação de matrícula: ${this._situacaoMatricula}.`;
  }
}
