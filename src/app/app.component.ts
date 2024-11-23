import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MainNavComponent} from './main-nav/main-nav.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ReportComponent} from './report/report.component';
import {StorageComponent} from './storage/storage.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  MatSlideToggleModule,MainNavComponent,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
  ProductDetailComponent, ProductListComponent, ReportComponent,StorageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hllo19front';
  summaryCards = [
    { title: 'Users', content: '150 Active Users' },
    { title: 'Orders', content: '45 Pending Orders' },
    { title: 'Revenue', content: '$23,450' },
    { title: 'Feedback', content: '120 New Feedbacks' },
  ];

  activities = [
    { date: '2024-11-21', description: 'User John Doe signed up.' },
    { date: '2024-11-22', description: 'Order #3456 was placed.' },
    { date: '2024-11-23', description: 'Feedback from user Jane Doe received.' },
  ];
}
