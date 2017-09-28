import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
      if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
      }

  }

}
