import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
// injecting service into module
@Injectable()

export class FlickrService {
key = "258728de8ed9b1a9c37666800df5a679";
secret = "3e42a1076561093e";
urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

constructor(private _http: Http) {}

searchPhotos(searchTerm: any) {
	const url = this.urlBase.replace('API_KEY', this.key).replace('TEXT', searchTerm);
	return this._http.get(url);
}

selectPhoto(pic) {
	console.log(pic);

}

}



