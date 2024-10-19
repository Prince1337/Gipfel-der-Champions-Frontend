import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faSearch, faSort } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.css'
})
export class ChampionListComponent {
  champions: Champion[] = [];
  faSearch = faSearch;
  faSort = faSort;
  faMagnifyingGlass = faMagnifyingGlass;

  filterText = '';
  sortKey = 'season';
  sortDirection: 'asc' | 'desc' = 'desc';

  tableHeaders = [
    { key: 'season', label: 'Season' },
    { key: 'champion', label: 'Name' },
    { key: 'nationality', label: 'Nationalität' },
    { key: 'team', label: 'Team' },
    { key: 'age', label: 'Alter' },
    { key: 'wins', label: 'Siege' },
    { key: 'points', label: 'Punkte' }
  ];

  get sortedAndFilteredItems() {
    return this.champions
      .filter(item => 
        Object.values(item).some(val => 
          val.toString().toLowerCase().includes(this.filterText.toLowerCase())
        )
      )
      .sort((a, b) => {
        const aValue = (a as { [key: string]: any })[this.sortKey];
  const bValue = (b as { [key: string]: any })[this.sortKey];
        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
  }

  sortBy(key: string) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
  }

  getSortIconClass(key: string) {
    return {
      'fa-sort': this.sortKey !== key,
      'fa-sort-up': this.sortKey === key && this.sortDirection === 'asc',
      'fa-sort-down': this.sortKey === key && this.sortDirection === 'desc'
    };
  }

  constructor(private championService: ChampionService, private router: Router) {}

  ngOnInit(): void {
    this.championService.getChampions().subscribe(data => this.champions = data);
  }

  viewDetails(season: number): void {
    this.router.navigate(['/details', season]);
  }
}
