import { Directive, TemplateRef } from '@angular/core'
import { ContactListComponent } from '../contacts/contact-list.component'

@Directive({
  selector: '[appTemplateGetter]'
})
export class TemplateGetterDirective {
  constructor(
    public templateRef: TemplateRef<any>,
    public contactListComponent: ContactListComponent
  ) {
    // console.log(this.templateRef)
    this.contactListComponent.actionsTemplate = this.templateRef
  }
}
