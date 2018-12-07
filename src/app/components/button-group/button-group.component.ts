import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

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

}
