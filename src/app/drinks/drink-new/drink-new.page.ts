import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink-new',
  templateUrl: './drink-new.page.html',
  styleUrls: ['./drink-new.page.scss'],
})
export class DrinkNewPage implements OnInit {

	newDrink = {
		type: "",
		name: ""
	};
	newAlcohol = {
		type: "",
		alcohol: 0,
		show: false
	};
	newVirgin = {
		type: ""
	};

  constructor(private router: Router) { }

  ngOnInit() {

  }

	ionViewWillEnter() {
	}

	drinkTypeSelected() {
		console.log(this.newDrink.type);
		if (this.newDrink.type == "virgin") {
			this.newVirgin.type = this.newDrink.type;
			this.newAlcohol.show = false;
		}
		else {
			this.newAlcohol.type = this.newDrink.type;
			this.newAlcohol.show = true;
		}


	}



}
