import { ActivatedRoute } from '@angular/router';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';
import { CommonModule } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';

@Component({
  selector: 'app-champion-details',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './champion-details.component.html',
  styleUrl: './champion-details.component.css'
})
export class ChampionDetailsComponent {
  champion?: Champion;
  faArrowLeft = faArrowLeft;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly championService: ChampionService
  ) {}

  ngOnInit() {
    this.viewList();
  }

  goBack() {
    window.history.back();
  }

  viewList(): void {
    const season = Number(this.route.snapshot.paramMap.get('season'));
    this.championService.getChampionBySeason(season).subscribe({
      next: (data) => {
        this.champion = data;
      },
      error: (error) => {
        console.error('Error fetching champion data:', error);
      }
    });
  }
}
