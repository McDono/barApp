import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	ref = firebase.database().ref("beer_of_the_month");
	public botm = {
		name: "name_1",
		alcohol: "6",
		type: "lager",
		description: "description bla bla bla",
		price_250: 0,
		price_500: 0
	}

  constructor() {
		// this.ref.push(this.botm); //create a new beer of the month into the database
		this.ref.on("value", resp => {
		resp.forEach(childSnapshot => {
			let item = childSnapshot.val();
			console.log(item);
			this.botm = item;
			console.log(this.botm);
		});
	});}

}
