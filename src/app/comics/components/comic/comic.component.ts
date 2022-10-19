import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ComicModel} from "../../../models/comic.model";
import {BehaviorSubject, Observable, of} from "rxjs";


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  @Input() comic!: ComicModel;
  @Input() isFavorite: boolean | null = false;

  @Output() favoriteChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  get limitedDescription(): string {
    if (this.comic.description === '') {
      return '';
    }
    return this.comic?.description.split(' ').splice(0, 7).join(' ') + '...';
  }

  onFavorite(isFavorite: boolean) {
    this.isFavorite = isFavorite;
    this.favoriteChanged.emit(isFavorite);
  }
}
