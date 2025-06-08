import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailsDirective } from '@ngx-uk-frontend/core/details';

@Component({
  selector: 'ngx-govscot-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotDetailsComponent extends DetailsDirective {}
