import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public ref;
	public botm = {
		name: "name_1",
		alcohol: "6",
		type: "lager",
		description: "description bla bla bla",
		price_250: 0,
		price_500: 0,
		img: "nothing bro"
	}
	public nextEve = {
		name: "eve",
		date: "02/11/2021",
		description: "Enter even description here",
		img: "nop"
	}

  constructor() {
		this.getBeerOfTheMonth();
		this.getNextEvent();
	}

	getBeerOfTheMonth() {
		this.ref = firebase.database().ref("beer_of_the_month");
		// this.ref.push(this.botm); //create a new beer of the month into the database
		this.ref.on("value", resp => {
			resp.forEach(childSnapshot => {
				let item = childSnapshot.val();
				console.log(item);
				this.botm = item;
			});
		});
	}

	getNextEvent() {
		this.ref = firebase.database().ref("next_event");
		// this.ref.push(this.nextEve); //create a new beer of the month into the database
		this.ref.on("value", resp => {
			resp.forEach(childSnapshot => {
				let item = childSnapshot.val();
				console.log(item);
				this.nextEve = item;
			});
		});
	}

}
