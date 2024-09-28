import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ngx-mat-my-simple-appbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './ngx-mat-my-simple-appbar.component.html',
  styleUrl: './ngx-mat-my-simple-appbar.component.css',
})
export class NgxMatMySimpleAppbarComponent {
  router = new Router();

  @Input({ required: true }) appName = '';
  @Input({ required: true }) thirdPartyLicensesLink = '';
  @Input() repositoryUrl?: string;
  @Input() licenseUrl?: string;
}
