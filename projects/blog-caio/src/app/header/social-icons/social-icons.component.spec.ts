import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconsComponent } from './social-icons.component';

describe('SocialIconsComponent', () => {
  let component: SocialIconsComponent;
  let fixture: ComponentFixture<SocialIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
