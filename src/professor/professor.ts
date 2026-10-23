import { Endereco } from '../endereco/endereco';
import { Pessoa } from '../pessoa/pessoa';
import type { Campus } from '../campus/campus';
import type { Evento } from '../evento/evento';
import type { UsuarioBiblioteca } from '../interfaces/usuario-biblioteca';

export class Professor extends Pessoa implements UsuarioBiblioteca {
  private _campus?: Campus;
  private _ativo: boolean = true;
  private _eventosInscritos: Array<Evento> = [];

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

  public get ativo(): boolean {
    return this._ativo;
  }

  public set ativo(ativo: boolean) {
    this._ativo = ativo;
  }

  public get eventosInscritos(): Array<Evento> {
    return this._eventosInscritos;
  }

  public set eventosInscritos(eventosInscritos: Array<Evento>) {
    this._eventosInscritos = eventosInscritos;
  }

  public adicionarEvento(evento: Evento): void {
    if (this._eventosInscritos.includes(evento)) {
      throw new Error('Professor já está inscrito neste evento.');
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
    return this._ativo;
  }

  public descreverVinculo(): string {
    if (this._campus) {
      return `Professor regular vinculado ao campus ${this._campus.nome}.`;
    }

    return 'Professor regular sem campus definido.';
  }
}
