import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiComponent } from '@nx-angular19-course/shared-ui';

@Component({
  imports: [NxWelcomeComponent, RouterModule, SharedUiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
  name = "mostafa"
}
