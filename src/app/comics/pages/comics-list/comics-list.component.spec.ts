import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsListComponent } from './comics.component';

describe('ComicsComponent', () => {
  let component: ComicsListComponent;
  let fixture: ComponentFixture<ComicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
