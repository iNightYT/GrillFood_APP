import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Listar Ventas', url: '/folder/outbox', icon: 'list' },
    { title: 'Ver menu', url: '/folder/favorites', icon: 'fast-food' },
    { title: 'Agregar/Eliminar Productos', url: '/folder/archived', icon: 'list-circle' },
    { title: 'Historial De Ventas', url: '/folder/trash', icon: 'archive' },
  ];
  public labels = [];
  constructor() {}
}
