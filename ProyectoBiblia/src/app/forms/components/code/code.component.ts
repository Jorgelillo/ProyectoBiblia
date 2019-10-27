import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormsService } from './../../services/forms.service';

/**
 * Component for the source code of the Forms.
 *
 * @export
 * @class CodeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less']
})
export class CodeComponent implements OnInit, OnDestroy {

  /**
   * List of path for the images.
   *
   * @type {Array<string>}
   * @memberof CodeComponent
   */
  codeImageList: Array<string>;

  /**
   * Subcription to get the images.
   *
   * @type {Subscription}
   * @memberof CodeComponent
   */
  imageSub: Subscription;

  /**
   * Creates an instance of CodeComponent.
   *
   * @param {FormsService} formsService
   * @memberof CodeComponent
   */
  constructor(private formsService: FormsService) {
    this.subcribeToCodeImages();
  }

  /**
   * Run in the init of the component.
   *
   * @memberof CodeComponent
   */
  ngOnInit() {
  }

  /**
   * Subcription to get the images to display.
   *
   * @memberof CodeComponent
   */
  subcribeToCodeImages() {
    this.imageSub = this.formsService.getCodeDisplayedObservable().subscribe(
        this.codeImagesIsOk.bind(this),
        this.codeImagesIsKo.bind(this),
        () => console.log('Data received properly.')
    );
  }

  /**
   * Check the images path received.
   *
   * @private
   * @param {Array<string>} imagesPath
   * @memberof CodeComponent
   */
  private codeImagesIsOk(imagesPath: Array<string>) {
    this.codeImageList = imagesPath;
  }

  /**
   * Check the images path received.
   *
   * @private
   * @param {Array<string>} imagesPath
   * @memberof CodeComponent
   */
  private codeImagesIsKo(message: Array<string>) {
    this.formsService.displayError(message);
  }


  /**
   * Run when the component is destroyed.
   *
   * @memberof CodeComponent
   */
  ngOnDestroy(): void {
    // Unsubscribe of the imageSub.
    this.imageSub.unsubscribe();
  }

}
