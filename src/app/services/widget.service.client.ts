import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client'
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class WidgetService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  	widgets:Widget[] = [
  { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
  { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46"},
  { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
  { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/4KcMdH8qiuk" },
  { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
  
];


	// adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
	createWidget(pageId: string, widget: Widget) {
		const url = this.baseUrl + '/api/page/' + pageId  + '/widget'
		return this.http.post(url, widget).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
	// retrieves the widgets in local widgets array whose pageId matches the parameter pageId 
	findWidgetsByPageId(pageId: string){
		const url = this.baseUrl + '/api/page/'+ pageId +'/widget'
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
	// retrieves the widget in local widgets array whose _id matches the widgetId parameter 
	findWidgetById(widgetId: string) {
		const url = this.baseUrl + '/api/widget/'+ widgetId
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
	// updates the widget in local widgets array whose _id matches the widgetId parameter 
	updateWidget(widgetId: string, widget: Widget){
		const url = this.baseUrl + '/api/widget/' + widgetId;
		return this.http.put(url, widget).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
	// removes the widget from local widgets array whose _id matches the widgetId parameter 
	deleteWidget(widgetId: string){
		const url = this.baseUrl + '/api/widget/' + widgetId;
		return this.http.delete(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
}	}	

