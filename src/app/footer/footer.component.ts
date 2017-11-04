import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  private getCopyrightDates(): string {
    const initYear = 2017
    const y = new Date().getFullYear()
    return y > initYear ? `${initYear}–${y}` : initYear.toString()
  }
  copyYear = this.getCopyrightDates()
}
