import { Directive, TemplateRef, Input, ViewContainerRef, OnInit } from '@angular/core'
import { ContactListComponent } from '../contacts/contact-list.component'
import { PortalService } from './portal.service'
import { TemplatePortal } from '@angular/cdk/portal'

@Directive({
  selector: '[appPortalGetter]'
})
export class PortalGetterDirective implements OnInit {
  @Input('appPortalGetter') portalName: string
  @Input('appPortalGetterContext') context: { [key: string]: any }

  constructor(
    private templateRef: TemplateRef<any>,
    private vc: ViewContainerRef,
    private portalService: PortalService
  ) {}

  ngOnInit(): void {
    const portal = new TemplatePortal(this.templateRef, this.vc)

    this.portalService.addPortal('actionPage', portal)
  }
}
