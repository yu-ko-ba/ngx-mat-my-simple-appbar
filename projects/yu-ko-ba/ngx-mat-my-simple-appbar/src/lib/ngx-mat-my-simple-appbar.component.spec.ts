import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatMySimpleAppbarComponent } from './ngx-mat-my-simple-appbar.component';

describe('NgxMatMySimpleAppbarComponent', () => {
  let component: NgxMatMySimpleAppbarComponent;
  let fixture: ComponentFixture<NgxMatMySimpleAppbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatMySimpleAppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatMySimpleAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
