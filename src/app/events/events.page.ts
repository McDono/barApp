import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

	public ref;
	event0 = {
		name: "event name",
		date: "25/10/2019",
		description: "event description",
		img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/67589284_1340660116086797_1551290810916405248_n.jpg?_nc_cat=111&_nc_oc=AQny2RqRa9VVGmXApdQlDN9_Xr-HuB-0xTi8Bh92GIGvDGDgeLqEMjZQeUo_wisFoGc&_nc_ht=scontent-dfw5-2.xx&oh=0550b08eb79599ab5485f81ff919c3d8&oe=5E575DCB"
	}
	public events = [ this.event0 ]

  constructor() { }

  ngOnInit() {
		this.getEvents();
  }

	getEvents() {
		this.ref = firebase.database().ref("events");
		// this.ref.push(this.events[0]); //create a new event into the database
		this.ref.on("value", resp => {
			this.events = [];
			this.events = snapshotToArray(resp);
			console.log(this.events)
		});
	}

}

export const snapshotToArray = snapshot => {
	console.log(snapshot)
	let returnArr = [];
	snapshot.forEach(childSnapshot => {
		let item = childSnapshot.val();
		console.log(item);
		item.key = childSnapshot.key;
		returnArr.push(item);
	});
	return returnArr;
};
