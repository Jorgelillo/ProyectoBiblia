import { FormsService } from './../../services/forms.service';
import { Component, OnInit } from '@angular/core';

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
export class FormTutorialPageComponent{

  /**
   * Creates an instance of FormTutorialPageComponent.
   *
   * @memberof FormTutorialPageComponent
   */
  constructor(private formsService: FormsService) { }

  displayBtn() {
    if (this.formsService.showResults) {
      this.formsService.showResults = false;
    } else {
      this.formsService.showResults = true;
    }
  }

}
