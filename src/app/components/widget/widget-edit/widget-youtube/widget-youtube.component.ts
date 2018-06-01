import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WidgetService } from "../../../../services/widget.service.client"
import { Widget } from "../../../../models/widget.model.client"
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget


  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	 	this.activatedRoute.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];
  		this.wgid = params['wgid'];
  		this.widget = this.widgetService.findWidgetById(this.wgid);
  	});		
  }

  remove() {}

  update() {}

}
