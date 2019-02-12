import { Component, OnInit, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact-list',
  template: `
    <h2>Contacts</h2>

    <mat-card *ngFor="let contact of contacts">
      {{ contact.name }}
    </mat-card>
    <app-page-actions>
      <button
        *appTemplateGetter
        type="button"
        class="toolbar-btn"
        mat-icon-button
        (click)="onSave()"
      >
        <mat-icon>add</mat-icon>
      </button>
    </app-page-actions>
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

  actionsTemplate: TemplateRef<any>

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.contacts.push({
        name: `Contact ${i}`
      })
    }
  }

  onSave() {
    alert('yay')
  }
}
