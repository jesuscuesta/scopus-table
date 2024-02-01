import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopusComponent } from './scopus.component';

describe('ScopusComponent', () => {
  let component: ScopusComponent;
  let fixture: ComponentFixture<ScopusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
