import {UserService} from './user.service';
import {User} from './../model/user';

describe('Service: UserService', () => {
  let service;

  beforeAll(async () => {
    service = new UserService();
    await service.init();
  });

  it('should bring all users', (done: DoneFn) => {
    service.loadUserList().then((users:User[])=>{
      expect(users).toContain(UserService.INITIAL_USER_LIST[0]);
      expect(users).toContain(UserService.INITIAL_USER_LIST[1]);
      expect(users).toContain(UserService.INITIAL_USER_LIST[2]);
      expect(users.length).toEqual(UserService.INITIAL_USER_LIST.length);
      done();
    });
  });
});