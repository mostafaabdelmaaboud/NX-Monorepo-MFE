import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-admin-ui',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './admin-ui.component.html',
  styleUrl: './admin-ui.component.scss',
})
export class AdminUiComponent {}
