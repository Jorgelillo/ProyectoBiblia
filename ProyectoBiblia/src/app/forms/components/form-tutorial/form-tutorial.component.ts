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
    this.formsService.setPerson(person);
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
  }
}
