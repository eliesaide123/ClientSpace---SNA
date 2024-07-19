import { Subject } from 'rxjs';

export const sharedPolicyNoSubject = new Subject<string>();
export const sharedPolicyNo$ = sharedPolicyNoSubject.asObservable();
