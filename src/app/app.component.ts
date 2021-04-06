import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keyup';

  getValue1(i: { target: { value: any; }; }){ console.warn(i.target.value)
  }
  getValue2(i: any){ console.warn(i)
  }
}
