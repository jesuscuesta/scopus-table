import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WosComponent } from './wos.component';

describe('WosComponent', () => {
  let component: WosComponent;
  let fixture: ComponentFixture<WosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
