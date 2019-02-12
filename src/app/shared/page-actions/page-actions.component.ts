import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  ApplicationRef,
  ViewChild,
  OnDestroy,
  ViewChildren,
  QueryList,
  TemplateRef
} from '@angular/core'
import { DomPortalHost, TemplatePortal, PortalHost, CdkPortal } from '@angular/cdk/portal'
import { TemplateGetterDirective } from '../template-getter.directive'
import { ContactListComponent } from 'src/app/contacts/contact-list.component'

@Component({
  selector: 'app-page-actions',
  template: `
    <ng-template cdkPortal>
      <ng-container [ngTemplateOutlet]="t"></ng-container>
    </ng-template>
    <ng-template cdkPortal>
      <ng-container [ngTemplateOutlet]="t"></ng-container>
    </ng-template>
    <ng-container [ngTemplateOutlet]="t"></ng-container>
    <ng-container [ngTemplateOutlet]="t"></ng-container>
    <ng-container [ngTemplateOutlet]="t"></ng-container>
  `,
  styles: []
})
export class PageActionsComponent implements OnInit, AfterViewInit, OnDestroy {
  t: TemplateRef<any>
  private portalHost: PortalHost
  private portalHost2: PortalHost
  @ViewChildren(CdkPortal) portals: QueryList<any>
  @ViewChild(TemplateGetterDirective) appTemplateGetter: TemplateGetterDirective

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    public contactListComponent: ContactListComponent
  ) {}

  ngOnInit() {
    this.t = this.contactListComponent.actionsTemplate
  }

  ngAfterViewInit(): void {
    console.log(this.t)
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#page-actions-container'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    )

    this.portalHost2 = new DomPortalHost(
      document.querySelector('#page-actions-container-2'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    )

    // Attach portal to host
    this.portalHost.attach(this.portals.toArray()[0])
    this.portalHost2.attach(this.portals.toArray()[1])
  }

  ngOnDestroy(): void {
    this.portalHost.detach()
  }
}
