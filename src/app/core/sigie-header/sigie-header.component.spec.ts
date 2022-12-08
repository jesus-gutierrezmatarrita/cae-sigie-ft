import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieHeaderComponent } from './sigie-header.component';

describe('SigieHeaderComponent', () => {
  let component: SigieHeaderComponent;
  let fixture: ComponentFixture<SigieHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigieHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
