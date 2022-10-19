import {Component, OnInit,} from '@angular/core';
import {ComicModel} from "../../../models/comic.model";
import {ComicsService} from "../../../services/comics/comics.service";
import {map, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit {
  constructor(private comicsService: ComicsService,) {
  }


  comics$: Observable<ComicModel[]> = of([]);

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.comics$ = this.comicsService.getComics().pipe(
      map(res => res.data.results),
    )
  }
}
