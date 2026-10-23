import type { Aluno } from '../aluno/aluno';
import { Endereco } from '../endereco/endereco';
import type { Professor } from '../professor/professor';

export class Evento {
  private _nome: string = '';
  private _endereco!: Endereco;
  private _participantes: Array<Aluno | Professor> = [];

  constructor(nome: string, endereco: Endereco, participantes: Array<Aluno | Professor> = []) {
    this._nome = nome;
    this._endereco = endereco;
    this._participantes = participantes;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get endereco(): Endereco {
    return this._endereco;
  }

  public set endereco(endereco: Endereco) {
    this._endereco = endereco;
  }

  public get participantes(): Array<Aluno | Professor> {
    return this._participantes;
  }

  public set participantes(participantes: Array<Aluno | Professor>) {
    this._participantes = participantes;
  }

  public adicionarParticipante(participante: Aluno | Professor): void {
    if (this._participantes.includes(participante)) {
      throw new Error('Participante já está inscrito neste evento.');
    }

    this._participantes.push(participante);
  }

  public listarParticipantes(): Array<Aluno | Professor> {
    return [...this._participantes];
  }

  public ListarParticipantes(): Array<Aluno | Professor> {
    return this.listarParticipantes();
  }
}
