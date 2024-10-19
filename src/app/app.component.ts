import { Component, inject } from '@angular/core';
import { Analytics, getAnalytics, logEvent } from '@angular/fire/analytics';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'f1-champions';
  private analytics: Analytics = inject(Analytics);

  constructor() {
    logEvent(this.analytics, 'app_opened');
  }
}
