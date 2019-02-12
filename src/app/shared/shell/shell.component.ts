import { Component, OnInit } from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PortalService } from '../portal.service'
import { Portal } from '@angular/cdk/portal'

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  portal$: Observable<Portal<any>>
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(
    private breakpointObserver: BreakpointObserver,
    private portalService: PortalService
  ) {}

  ngOnInit(): void {
    this.portal$ = this.portalService.getPortal('actionPage')
  }
}
