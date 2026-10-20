import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import { AdminUiComponent } from '@nx-angular19-course/admin-ui';

@Component({
  imports: [NxWelcomeComponent, RouterModule, AdminUiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin';
}
  