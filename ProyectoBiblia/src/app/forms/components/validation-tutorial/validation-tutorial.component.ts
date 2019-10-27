import { PersondDto } from './../../models/person/persond-dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from './../../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { forbiddenNameValidator } from '../../directives/forbiden-name-validator.directive';

@Component({
  selector: 'app-validation-tutorial',
  templateUrl: './validation-tutorial.component.html',
  styleUrls: ['./validation-tutorial.component.less']
})
export class ValidationTutorialComponent implements OnInit {

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
        name: new FormControl('', [ Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i) ]),
        surname: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.maxLength(10) ]),
        age: new FormControl('', [ Validators.required, Validators.min(18), Validators.max(80)]),
        address: new FormControl(''),
        city: new FormControl('')
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

  // Access to Form Properties.

  /**
   *
   *
   * @readonly
   * @memberof ValidationTutorialComponent
   */
  get name() { return this.profileForm.get('name'); }

  /**
   *
   *
   * @readonly
   * @memberof ValidationTutorialComponent
   */

  /**
   *
   *
   * @readonly
   * @memberof ValidationTutorialComponent
   */
  get surname() { return this.profileForm.get('surname'); }

  /**
   *
   *
   * @readonly
   * @memberof ValidationTutorialComponent
   */
  get age() { return this.profileForm.get('age'); }

  /**
   *
   *
   * @readonly
   * @memberof ValidationTutorialComponent
   */
  get address() { return this.profileForm.get('address'); }

  /**
   *
   *
   * @readonly
   * @memberof ValidationTutorialComponent
   */
  get city() { return this.profileForm.get('city'); }

}
