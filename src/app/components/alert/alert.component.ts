import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

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
