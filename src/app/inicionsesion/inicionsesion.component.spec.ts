import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicionsesionComponent } from './inicionsesion.component';

describe('InicionsesionComponent', () => {
  let component: InicionsesionComponent;
  let fixture: ComponentFixture<InicionsesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicionsesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicionsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
