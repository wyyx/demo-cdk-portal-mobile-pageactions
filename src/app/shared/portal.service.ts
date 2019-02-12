import { Injectable } from '@angular/core'
import { Portal, CdkPortal } from '@angular/cdk/portal'
import { Subject, BehaviorSubject, Observable, of } from 'rxjs'
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  portalSubject$: BehaviorSubject<string> = new BehaviorSubject(null)
  portals: { [key: string]: Portal<any> } = {}

  getPortal(portalName: string) {
    return this.portalSubject$.asObservable().pipe(
      filter(name => name === portalName),
      map(name => this.portals[name])
    )
  }

  addPortal(portalName: string, portal: Portal<any>) {
    this.portals[portalName] = portal
    this.portalSubject$.next(portalName)
  }

  constructor() {}
}
