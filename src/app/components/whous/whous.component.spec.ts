import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhousComponent } from './whous.component';

describe('WhousComponent', () => {
  let component: WhousComponent;
  let fixture: ComponentFixture<WhousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
