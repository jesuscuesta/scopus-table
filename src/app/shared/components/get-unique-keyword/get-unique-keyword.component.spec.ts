import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUniqueKeywordComponent } from './get-unique-keyword.component';

describe('GetUniqueKeywordComponent', () => {
  let component: GetUniqueKeywordComponent;
  let fixture: ComponentFixture<GetUniqueKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUniqueKeywordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetUniqueKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
