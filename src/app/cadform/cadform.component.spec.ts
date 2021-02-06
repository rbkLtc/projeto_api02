import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadformComponent } from './cadform.component';

describe('CadformComponent', () => {
  let component: CadformComponent;
  let fixture: ComponentFixture<CadformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
