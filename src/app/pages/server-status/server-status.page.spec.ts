import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatusPage } from './server-status.page';

describe('ServerStatusPage', () => {
  let component: ServerStatusPage;
  let fixture: ComponentFixture<ServerStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
