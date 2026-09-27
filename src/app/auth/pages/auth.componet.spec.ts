import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponet } from './auth.componet';

describe('AuthComponet', () => {
  let component: AuthComponet;
  let fixture: ComponentFixture<AuthComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
