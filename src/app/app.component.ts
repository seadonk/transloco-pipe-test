import {Component} from '@angular/core';
import {L10nTestService} from './l10n-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  date = new Date();

  constructor(public l10nTestService: L10nTestService) {
  }
}
