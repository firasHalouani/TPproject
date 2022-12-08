import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProdDrComponent } from './ajout-prod-dr.component';

describe('AjoutProdDrComponent', () => {
  let component: AjoutProdDrComponent;
  let fixture: ComponentFixture<AjoutProdDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProdDrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProdDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
