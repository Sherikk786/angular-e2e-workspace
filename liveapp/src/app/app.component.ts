// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { NxWelcomeComponent } from './nx-welcome.component';

// @Component({
//   imports: [NxWelcomeComponent, RouterModule],
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
//   standalone:true,
// })
// export class AppComponent {
//   title = 'liveapp';
// }
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  template: `<p>{{ greeting }}</p>`,
})
export class AppComponent implements OnInit {
  title = 'liveapp'; 
  greeting = '';

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`{ hello }`,
      })
      .valueChanges.subscribe((result: any) => {
        this.greeting = result?.data?.hello;
      });
  }
}
