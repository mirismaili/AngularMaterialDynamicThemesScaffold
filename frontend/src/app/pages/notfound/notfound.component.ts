// core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  path: string;
  pathName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.path = this.route.snapshot.data.path;
    this.pathName = this.route.snapshot.data.pathName;
  }
}
