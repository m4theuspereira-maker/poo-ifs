import { Endereco } from '../endereco/endereco';
import type { Professor } from '../professor/professor';
import type { TecnicoAdministrativo } from '../tecnico-administrativo/tecnico-administrativo';

export class Campus {
  private _nome: string = '';
  private _endereco!: Endereco;
  private _alunos: Array<any> = [];
  private _professores: Array<Professor> = [];
  private _tecnicosAdministrativos: Array<TecnicoAdministrativo> = [];

  constructor(
    nome: string,
    endereco: Endereco,
    alunos: Array<any> = [],
    professores: Array<Professor> = [],
    tecnicosAdministrativos: Array<TecnicoAdministrativo> = [],
  ) {
    this._nome = nome;
    this._endereco = endereco;
    this._alunos = alunos;
    this._professores = professores;
    this._tecnicosAdministrativos = tecnicosAdministrativos;
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

  public get alunos(): Array<any> {
    return this._alunos;
  }

  public set alunos(alunos: Array<any>) {
    this._alunos = alunos;
  }

  public get professores(): Array<Professor> {
    return this._professores;
  }

  public set professores(professores: Array<Professor>) {
    this._professores = professores;
  }

  public get tecnicosAdministrativos(): Array<TecnicoAdministrativo> {
    return this._tecnicosAdministrativos;
  }

  public set tecnicosAdministrativos(tecnicosAdministrativos: Array<TecnicoAdministrativo>) {
    this._tecnicosAdministrativos = tecnicosAdministrativos;
  }

  public adicionarProfessor(professor: Professor): void {
    if (professor.campus !== undefined && professor.campus !== this) {
      throw new Error('Professor já está alocado em outro campus.');
    }

    if (!this._professores.includes(professor)) {
      professor.campus = this;
      this._professores.push(professor);
    }
  }

  public ListarProfessores(): void {
    this._professores.forEach((professor) => {
      console.log(`${professor.getNome()} ${professor.getSobrenome()} ${professor.getMatricula()}`);
    });
  }
}
