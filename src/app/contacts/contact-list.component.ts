import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core'
import { PortalService } from '../shared/portal.service'
import { ComponentPortal } from '@angular/cdk/portal'
import { HelloWorldComponent } from '../shared/hello-world/hello-world.component'

@Component({
  selector: 'app-contact-list',
  template: `
    <h2>Contacts</h2>

    <mat-card *ngFor="let contact of contacts">
      {{ contact.name }}
    </mat-card>

    <button
      *appPortalGetter="'pageActionPortal'; context: context"
      type="button"
      class="toolbar-btn"
      mat-icon-button
      (click)="onSave()"
    >
      <mat-icon>add</mat-icon>
    </button>
  `,
  styles: [
    `
      mat-card {
        margin-bottom: 5px;
      }
    `
  ]
})
export class ContactListComponent implements OnInit {
  contacts = []
  context = { name: 'Houdini', age: 37 }

  actionsTemplate: TemplateRef<any>

  constructor(private portalService: PortalService) {}

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.contacts.push({
        name: `Contact ${i}`
      })
    }

    console.log('add helloWorld portal')
    this.portalService.addPortal('helloWorld', new ComponentPortal(HelloWorldComponent))
  }

  onSave() {
    alert('yay')
  }
}
