import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { routes } from './app/app.routes'; // Import your routes

platformBrowserDynamic()
  .bootstrapModule(AppComponent)
  .then(() => {
    // Manually configure routing after bootstrapping
    RouterModule.forRoot(routes);
  })
  .catch(err => console.error(err));
