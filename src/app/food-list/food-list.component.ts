import { Food, FoodService } from './../services/food.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  term = '';
  addFood = false;
  addFoodForm!: FormGroup;

  constructor(public foodService: FoodService) {
    this.addFoodForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      kcal: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submitFood(): void {
    if (this.addFoodForm.valid) {
      const foodForAdd: Food = {
        name: this.addFoodForm?.get('name')?.value,
        calories: this.addFoodForm?.get('kcal')?.value,
        image: this.addFoodForm?.get('img')?.value,
        quantity: 0,
      };
      this.foodService.addFood(foodForAdd);
      this.addFoodForm.reset();
      alert('The food its added!');
    } else {
      alert('The form its invalid, please complete all fields!');
    }
  }
}
