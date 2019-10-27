import { PersondDto } from './../models/person/persond-dto';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * Service for forms.
 *
 * @export
 * @class FormsService
 */
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  /**
   * List of persons.
   *
   * @private
   * @type {Array<PersondDto>}
   * @memberof FormsService
   */
  private personList: Array<PersondDto>;

  /**
   * Display or not the result frame.
   *
   * @type {boolean}
   * @memberof FormsService
   */
  showResults: boolean;

  /**
   * Display or not the code frame.
   *
   * @type {boolean}
   * @memberof FormsService
   */
  showCode: boolean;

  /**
   * Subject for code infomation.
   *
   * @type {Subject<Array<string>>}
   * @memberof FormsService
   */
  codeDisplayedSubject$: Subject<Array<string>>;

  /**
   * Creates an instance of FormsService.
   *
   * @memberof FormsService
   */
  constructor() {
    this.showCode = false;
    this.showResults = false;
    this.personList = new Array<PersondDto>();
    this.codeDisplayedSubject$ = new Subject<Array<string>>();
  }

  /**
   * Set a person in the personList Array.
   *
   * @param {PersondDto} person
   * @memberof FormsService
   */
  setPerson(person: PersondDto) {
    this.personList.push(person);
  }

  /**
   * Get the persons in the personList Array.
   *
   * @returns {Array<PersondDto>}
   * @memberof FormsService
   */
  getPersonList(): Array<PersondDto> {
    return this.personList;
  }

  /**
   * Set the personList Array with zero values.
   *
   * @memberof FormsService
   */
  cleanPersonList() {
    this.personList = [];
  }

  /**
   * Return the observable of codeDisplayedSubject.
   *
   * @returns {Observable<Array<string>>}
   * @memberof FormsService
   */
  getCodeDisplayedObservable(): Observable<Array<string>> {
    console.log('getCodeDisplayedObservable');
    return this.codeDisplayedSubject$.asObservable();
  }

  /**
   * Send the information to the Subject.
   *
   * @param {Array<string>} codeInfo
   * @memberof FormsService
   */
  nextCodeInformation(codeInfo: Array<string>) {

    console.log(codeInfo);

    if ( codeInfo !== ( null || undefined ) && codeInfo.length !== 0 ) {
      console.log('OK');
      this.codeDisplayedSubject$.next(codeInfo);
    } else {
      console.log('KO');
      this.codeDisplayedSubject$.next([]);
    }
  }

  /**
   * Common method to display errors in the subscription.
   *
   * @param {string} error
   * @memberof FormsService
   */
  displayError(error: Array<string>) {
    console.warn('An error was found in the subcription.');
    console.warn('The data received is ' + error);
  }
}
