import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LayoutModule } from '@angular/cdk/layout'
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from '@angular/material'

import { ShellComponent } from './shell/shell.component'
import { RouterModule } from '@angular/router'
import { PortalModule } from '@angular/cdk/portal'
import { PortalGetterDirective } from './portal-getter.directive'

const exportedModules = [
  LayoutModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  FlexLayoutModule,
  RouterModule,
  PortalModule
]

@NgModule({
  imports: [CommonModule, ...exportedModules],
  declarations: [ShellComponent, PortalGetterDirective],
  exports: [ShellComponent, ...exportedModules, PortalGetterDirective]
})
export class SharedModule {}
