import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAboutMeComponent } from './comments-about-me.component';

describe('CommentsAboutMeComponent', () => {
  let component: CommentsAboutMeComponent;
  let fixture: ComponentFixture<CommentsAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
