import { Prioridade } from './enum/prioridade';
import { Task } from './models/task-model';
import { TaskService } from './services/task-service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskfront';

  tasks: Task[] = [];
  filtroPrioridade: string = '';
  filtroSituacao: Boolean = false;
  filtroResponsavel: string = '';
  filtroTitulo: string = '';
  filtroNumero: string = '';
  menuCadastroCriar: Boolean = false;
  menuCadastroEditar: Boolean = false;
  responsaveisUnicos: String[] = [];

  tituloModal: Boolean = true;

  taskTemplate: Task = {
    titulo: '',
    descricao: '',
    responsavel: '',
    prioridade: Prioridade.MEDIA,
    deadline: new Date(),
    situacao: false
  };



  constructor(private taskService: TaskService) {
    this.obterTasksCadastradas();
  }

  limparTemplate() {
    // Redefine os valores das propriedades do taskTemplate para os valores padrão
    this.taskTemplate.id = undefined;
    this.taskTemplate.titulo = '';
    this.taskTemplate.descricao = '';
    this.taskTemplate.responsavel = '';
    this.taskTemplate.prioridade = Prioridade.MEDIA;
    this.taskTemplate.deadline = new Date();
    this.taskTemplate.situacao = false;
  }

  obterTasksCadastradas() {
    this.taskService.obterTarefas()
      .subscribe(response => {
        if (response.data.tasks !== undefined) {
          this.tasks = response.data.tasks;
        }
        else {
          console.log("Listas indefinidas.")
        }
      }
      )
  }

  cadastrarTask() {
    this.taskService.cadastrarTarefa(this.taskTemplate)
      .subscribe(() => {
        this.obterTasksCadastradas();
        this.menuCadastroCriar = false;
        this.tituloModal = true;
        this.limparTemplate();
      });
  }

  cancelarCriar() {
    this.limparTemplate();
    this.menuCadastroCriar = false;
  }

  cancelarSalvar() {
    this.limparTemplate();
    this.tituloModal = true;
    this.menuCadastroEditar = false;
  }

  deletarTask(id: Number) {
    this.taskService.deletarTarefa(id)
      .subscribe(() => this.obterTasksCadastradas());
  }

  concluirTask(id: Number) {
    this.taskService.concluirTarefa(id)
      .subscribe(() => this.obterTasksCadastradas());
  }

  editarTask(id: Number) {
    this.menuCadastroEditar = true;
    this.tituloModal = false;
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      this.taskTemplate = { ...task };
    }
  }

  salvarEdicao() {
    this.taskService.editarTarefa(this.taskTemplate.id!, this.taskTemplate)
      .subscribe(() => {
        this.obterTasksCadastradas();
        this.menuCadastroEditar = false;
        this.tituloModal = true;
        this.limparTemplate();
      });
  }

  filtro(task: Task): Boolean {

    const filtroPrioridadePassa = this.filtroPrioridade === '' || this.filtroPrioridade === task.prioridade;

    const filtroSituacaoPassa = this.filtroSituacao === null || this.filtroSituacao === task.situacao;

    const filtroResponsavelPassa = this.filtroResponsavel === '' || this.filtroResponsavel === task.responsavel;

    const filtroTituloPassa = this.filtroTitulo === '' ||
      task.titulo.toLowerCase().includes(this.filtroTitulo.toLowerCase())
      || task.descricao.toLowerCase().includes(this.filtroTitulo.toLowerCase());

    const filtroNumeroPassa = this.filtroNumero === '' || parseInt(this.filtroNumero) - 1 === this.tasks.indexOf(task);

    return filtroPrioridadePassa && filtroResponsavelPassa && filtroSituacaoPassa && filtroTituloPassa && filtroNumeroPassa;
  }

}
