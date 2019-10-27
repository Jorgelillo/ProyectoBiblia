import { FormsService } from './../../services/forms.service';
import { Component } from '@angular/core';

/**
 * Page to diplay components related to Forms.
 *
 * @export
 * @class FormTutorialPageComponent
 */
@Component({
  selector: 'app-form-page-tutorial',
  templateUrl: './form-tutorial.component.html',
  styleUrls: ['./form-tutorial.component.less']
})
export class FormTutorialPageComponent {

  /**
   * Creates an instance of FormTutorialPageComponent.
   *
   * @param {FormsService} formsService
   * @memberof FormTutorialPageComponent
   */
  constructor(private formsService: FormsService) { }

  /**
   * Display the result frame or not.
   *
   * @memberof FormTutorialPageComponent
   */
  displayForms() {
    if (this.formsService.showResults) {
      this.formsService.showResults = false;
    } else {
      this.formsService.showResults = true;
    }
  }

  /**
   * Display the code frame or not.
   *
   * @memberof FormTutorialPageComponent
   */
  displayCode() {
    if (this.formsService.showCode) {
      this.formsService.showCode = false;
    } else {
      this.formsService.showCode = true;
    }
  }

}
