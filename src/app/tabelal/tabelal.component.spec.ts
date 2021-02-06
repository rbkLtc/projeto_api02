import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelalComponent } from './tabelal.component';

describe('TabelalComponent', () => {
  let component: TabelalComponent;
  let fixture: ComponentFixture<TabelalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
