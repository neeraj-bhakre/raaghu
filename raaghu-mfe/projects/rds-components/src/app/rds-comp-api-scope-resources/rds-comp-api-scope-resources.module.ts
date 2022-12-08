import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompApiScopeResourcesComponent } from './rds-comp-api-scope-resources.component';
import { RdsCompApiScopeResourcesShimmerComponent } from './rds-comp-api-scope-resources-shimmer/rds-comp-api-scope-resources-shimmer.component';
import { RdsAccordionModule, RdsCheckboxModule } from '@libs/rds-elements';

@NgModule({
  declarations: [
    RdsCompApiScopeResourcesComponent,
    RdsCompApiScopeResourcesShimmerComponent
  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsAccordionModule,

  ],
  exports: [
    RdsCompApiScopeResourcesComponent
  ]
})
export class RdsCompApiScopeResourcesModule { }
