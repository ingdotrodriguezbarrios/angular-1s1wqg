import {UserService} from './user.service';

describe('Service: UserService', () => {
  let service;

  beforeEach(() => {
    service = new LanguagesService();
  });

  it('should return available languages', () => {
    let languages = service.get();
    expect(languages).toContain('en');
    expect(languages).toContain('es');
    expect(languages).toContain('fr');
    expect(languages.length).toEqual(3);
  });
});