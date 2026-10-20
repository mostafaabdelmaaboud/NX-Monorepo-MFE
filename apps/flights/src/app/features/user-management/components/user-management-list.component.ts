import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management-list',
  imports: [CommonModule],
  templateUrl: './user-management-list.component.html',
  styleUrl: './user-management-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementListComponent {}
