import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;


  constructor(private uiService: UiService, private router: Router){
    this.subscription = uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(router: string){
    return this.router.url === router;
  }
}
