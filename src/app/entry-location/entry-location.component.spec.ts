import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLocationComponent } from './entry-location.component';

describe('EntryLocationComponent', () => {
  let component: EntryLocationComponent;
  let fixture: ComponentFixture<EntryLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
