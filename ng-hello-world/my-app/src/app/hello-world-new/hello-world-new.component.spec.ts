import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldNewComponent } from './hello-world-new.component';

describe('HelloWorldNewComponent', () => {
  let component: HelloWorldNewComponent;
  let fixture: ComponentFixture<HelloWorldNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
