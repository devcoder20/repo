import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ContetfulCommonComponent } from './contetful-common.component';

describe('ContetfulCommonComponent', () => {
  let component: ContetfulCommonComponent;
  let fixture: ComponentFixture<ContetfulCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContetfulCommonComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContetfulCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
