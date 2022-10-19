import {Component, OnInit, Input} from '@angular/core';
import {userQuery} from "../../../store/user/user.selectors";
import {Store} from "@ngrx/store";
import {UserModel} from "../../../models/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit {
  @Input() user$!: Observable<UserModel>;
  constructor() {
  }

  ngOnInit(): void {
  }

}
