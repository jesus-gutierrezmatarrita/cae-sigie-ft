import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieFooterComponent } from './sigie-footer.component';

describe('SigieFooterComponent', () => {
  let component: SigieFooterComponent;
  let fixture: ComponentFixture<SigieFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigieFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
