import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { fakeAsync, flush } from '@angular/core/testing';

describe('AuthService', () => {
  let service: AuthService;

  let mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl'),
  };

  let mockHttpClient = {
    post: jasmine.createSpy('post'),
  };

  beforeEach(() => {
    service = new AuthService(
      <HttpClient>(<unknown>mockHttpClient),
      <Router>(<unknown>mockRouter)
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test returnToLogin', () => {
    service.returnToLogin();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });

  it('should test goToPages', () => {
    service.goToPages();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });

  it('should test login WHEN OK IS TRUE', () => {
    mockHttpClient.post.and.returnValue(
      of({ ok: true, token: 'token', uid: 'uid', name: 'name' })
    );
    const result$ = service.login('email@mail.com', '123456');
    // flush();
    result$.subscribe((res) => {
      expect(res).toBeDefined();
    });
  });

  it('should test login WHEN OK IS FALSE', () => {
    mockHttpClient.post.and.returnValue(
      of({ ok: false, token: 'token', uid: 'uid', name: 'name' })
    );
    const result$ = service.login('email@mail.com', '123456');
    // flush();
    result$.subscribe((res) => {
      expect(res).toBeDefined();
    });
  });

  it('should test login CATCHERROR', () => {
    const swalSpy = spyOn(service.SWAL, 'fire');

    mockHttpClient.post.and.returnValue(
      of({ ok: false, token: undefined, uid: 'uid', name: 'name' })
    );
    const result$ = service.login('email@mail.com', '123456');
    // flush();
    result$.subscribe((res) => {
      expect(res).toBeDefined();
      expect(swalSpy).toHaveBeenCalled();
    });
  });

  it('should test isLoggedIn', () => {
    localStorage.clear();
    let booleanIsLoggedInt = service.isLoggedIn();
    expect(booleanIsLoggedInt).toBe(false);
  });
});
