import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrawingPage } from './drawing.page';

describe('DrawingPage', () => {
  let component: DrawingPage;
  let fixture: ComponentFixture<DrawingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
