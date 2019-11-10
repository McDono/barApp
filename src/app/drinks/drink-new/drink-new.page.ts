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
		name: "",
		description: "",
		img: "",
		alcohol: 0,
		isAlcohol: false,
		price: 0,
		price_250: 0,
		price_500: 0,
		beer_type: ""
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
		if (this.newDrink.type == "virgin")
			this.newDrink.isAlcohol = false;
		else
			this.newDrink.isAlcohol = true;
	}



}
