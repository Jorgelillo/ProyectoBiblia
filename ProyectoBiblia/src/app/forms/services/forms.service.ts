import { PersondDto } from './../models/person/persond-dto';
import { Injectable } from '@angular/core';

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
   * Creates an instance of FormsService.
   *
   * @memberof FormsService
   */
  constructor() {
    this.showResults = false;
    this.personList = new Array<PersondDto>();
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
}
