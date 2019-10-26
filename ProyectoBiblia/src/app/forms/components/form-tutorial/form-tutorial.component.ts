import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormsService } from './../../services/forms.service';
import { PersondDto } from './../../models/person/persond-dto';

/**
 * Component for the form of the Angular.io tutorial.
 *
 * @export
 * @class FormTutorialComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-form-tutorial',
  templateUrl: './form-tutorial.component.html',
  styleUrls: ['./form-tutorial.component.less']
})
export class FormTutorialComponent implements OnInit {

  /**
   *
   * @private
   * @type {Array<PersondDto>}
   * @memberof FormTutorialComponent
   */
  private personList: Array<PersondDto>;

  /**
   * Form.
   *
   * @private
   * @type {FormGroup}
   * @memberof FormTutorialComponent
   */
  private checkoutForm: FormGroup;

  /**
   * Creates an instance of FormTutorialComponent.
   *
   * @param {FormBuilder} formBuilder Dependency Injection.
   * @param {FormsService} formsService Dependency Injection.
   * @memberof FormTutorialComponent
   */
  constructor(private formBuilder: FormBuilder,
              private formsService: FormsService) { }

  /**
   * Method run in when the component is initialized.
   *
   * @memberof FormTutorialComponent
   */
  ngOnInit() {
    // Get the personList from the Service.
    this.personList = this.formsService.getPersonList();
    // Initialize the form.
    this.initForm();
  }

  /**
   * Initialize the form.
   *
   * @private
   * @memberof FormTutorialComponent
   */
  private initForm() {
    console.log('Form has been initialized.');

    this.checkoutForm = this.formBuilder.group({
      name: '', surname: '', age: '', address: '', city: ''
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
    this.checkoutForm.reset();
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
