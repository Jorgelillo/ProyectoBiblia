import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormsService } from './../../services/forms.service';
import { PersondDto } from '../../models/person/persond-dto';

/**
 * Component for the Reactive form of the Angular.io tutorial.
 *
 * @export
 * @class ReactiveFormTutorialComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-reactive-form-tutorial',
  templateUrl: './reactive-form-tutorial.component.html',
  styleUrls: ['./reactive-form-tutorial.component.less']
})
export class ReactiveFormTutorialComponent implements OnInit {

  /**
   * Form.
   *
   * @private
   * @type {FormGroup}
   * @memberof ReactiveFormTutorialComponent
   */
  private profileForm: FormGroup;

  /**
   * List of persons.
   *
   * @private
   * @type {Array<PersondDto>}
   * @memberof ReactiveFormTutorialComponent
   */
  private personList: Array<PersondDto>;

  /**
   * Creates an instance of ReactiveFormTutorialComponent.
   *
   * @param {FormsService} formsService
   * @memberof ReactiveFormTutorialComponent
   */
  constructor( private formsService: FormsService ) { }


  /**
   * Initialize the form.
   *
   * @memberof ReactiveFormTutorialComponent
   */
  ngOnInit() {
    // Get the personList from the Service.
    this.personList = this.formsService.getPersonList();
    // Initialize the form.
    this.createForm();
  }

  /**
   *
   *
   * @memberof ReactiveFormTutorialComponent
   */
  createForm(): void {
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      age: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
    });
  }

  /**
   * Set a person to the personList array.
   *
   * @private
   * @param {PersondDto} person
   * @memberof FormTutorialComponent
   */
  private onSubmit(person: PersondDto) {
    console.warn('Your order has been submitted', person);
    this.formsService.setPerson(person);
    this.personList = this.formsService.getPersonList();
    this.profileForm.reset();
  }

  /**
   * Clean the personList Array.
   *
   * @private
   * @memberof FormTutorialComponent
   */
  private cleanList(): void {
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
    if ( this.personList.length > 2 ) {
      return this.personList.length - 2;
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
    if ( this.personList.length > 2 ) {
      return this.personList.length;
    }
    return 2;
  }

}
