import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LanguageService } from './services/language.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the main portfolio content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')).toBeTruthy();
    expect(compiled.querySelector('#hero-title')?.textContent).toBeTruthy();
  });

  it('should translate project and experience details to English', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const language = TestBed.inject(LanguageService);

    language.setLanguage('en');
    fixture.detectChanges();

    expect(fixture.componentInstance.experiences[0].role).toBe('Back-end Developer');
    expect(fixture.componentInstance.experiences[0].timeExperience).toBe('June 2025 — present');
    expect(fixture.componentInstance.experiences[0].descriptionExperience).toContain(
      'Development and maintenance',
    );
    expect(fixture.componentInstance.projects[0].description).toContain(
      'Local services marketplace',
    );
  });
});
