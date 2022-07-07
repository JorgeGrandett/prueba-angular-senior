import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPlusTreeComponent } from './b-plus-tree.component';

describe('BPlusTreeComponent', () => {
  let component: BPlusTreeComponent;
  let fixture: ComponentFixture<BPlusTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPlusTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BPlusTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
