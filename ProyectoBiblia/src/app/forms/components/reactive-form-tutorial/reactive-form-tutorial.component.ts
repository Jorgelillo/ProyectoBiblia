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
    // Initialize the form.
    this.createForm();
  }

  /**
   * Create a new Form.
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
    this.formsService.setPerson(person);
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
  }

}
