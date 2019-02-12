import { Component, OnInit } from '@angular/core'
import { PortalService } from '../portal.service'
import { ComponentPortal } from '@angular/cdk/portal'

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
