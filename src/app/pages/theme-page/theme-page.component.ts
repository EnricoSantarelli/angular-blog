import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.css']
})
export class ThemePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        this.theme = value.get("theme")
      } 
    )
  }
  theme? : string | null;

}
