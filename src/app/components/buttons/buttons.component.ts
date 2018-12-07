import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  validateBtnStateError: ClrLoadingState = ClrLoadingState.DEFAULT;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { title: string }) => {
        this.titleService.setTitle(data.title);
      });
  }

  validateDemo() {
    this.validateBtnState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.validateBtnState = ClrLoadingState.SUCCESS;
    }, 2000);
  }

  validateErrorDemo() {
    this.validateBtnStateError = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.validateBtnStateError = ClrLoadingState.ERROR;
    }, 2000);
  }

  submitDemo() {
    this.submitBtnState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.submitBtnState = ClrLoadingState.DEFAULT;
    }, 2000);
  }

}
