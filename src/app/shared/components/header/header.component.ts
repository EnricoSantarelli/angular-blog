import { Component } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  themes: string[] = ['World', 'Technology', 'Design', 'Culture', 'Business', 'Politics', 'Science', 'Health']
}
