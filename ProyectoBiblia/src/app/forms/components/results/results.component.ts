import { Component, OnInit } from '@angular/core';

import { PersondDto } from './../../models/person/persond-dto';
import { FormsService } from './../../services/forms.service';

/**
 * Component for displaying results.
 *
 * @export
 * @class ResultsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {

  /**
   * List of Persons.
   *
   * @private
   * @type {Array<PersondDto>}
   * @memberof ResultsComponent
   */
  private personList: Array<PersondDto>;

  /**
   * Number of persons to display in the results.
   *
   * @private
   * @memberof ResultsComponent
   */
  private personsDisplayedNb = 4;

  /**
   * Creates an instance of ResultsComponent.
   *
   * @param {FormsService} formsService
   * @memberof ResultsComponent
   */
  constructor(private formsService: FormsService) { }

  /**
   * Run when the component is initialized.
   *
   * @memberof ResultsComponent
   */
  ngOnInit() {
    this.personList = this.formsService.getPersonList();
  }

  /**
   * Clean the list of persons.
   *
   * @memberof ResultsComponent
   */
  cleanList() {
    this.formsService.cleanPersonList();
    this.personList = this.formsService.getPersonList();
  }

  /**
   * Set the init number from which display the personList Array.
   *
   * @private
   * @returns {number}
   * @memberof FormTutorialComponent
   */
  private getInit(): number {
    if ( this.personList.length > this.personsDisplayedNb ) {
      return this.personList.length - this.personsDisplayedNb;
    }
    return 0;
  }

  /**
   * Set the final number for displaying the personList Array.
   *
   * @private
   * @returns {number}
   * @memberof FormTutorialComponent
   */
  private getEnd(): number {
    if ( this.personList.length > this.personsDisplayedNb ) {
      return this.personList.length;
    }
    return this.personsDisplayedNb;
  }
}
