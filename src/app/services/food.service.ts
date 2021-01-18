import { Injectable } from '@angular/core';

export interface Food {
  name: string;
  calories: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private listFood: Food[] = [];
  totalKcal = 0;

  private foods: Food[] = [
    {
      name: 'Pizza',
      calories: 400,
      image: 'https://i.imgur.com/eTmWoAN.png',
      quantity: 0,
    },
    {
      name: 'Salad',
      calories: 150,
      image: 'https://i.imgur.com/DupGBz5.jpg',
      quantity: 0,
    },
    {
      name: 'Sweet Potato',
      calories: 120,
      image: 'https://i.imgur.com/hGraGyR.jpg',
      quantity: 0,
    },
    {
      name: 'Gnocchi',
      calories: 500,
      image: 'https://i.imgur.com/93ekwW0.jpg',
      quantity: 0,
    },
    {
      name: 'Pot Roast',
      calories: 350,
      image: 'https://i.imgur.com/WCzJDWz.jpg',
      quantity: 0,
    },
    {
      name: 'Lasagna',
      calories: 750,
      image: 'https://i.imgur.com/ClxOafl.jpg',
      quantity: 0,
    },
    {
      name: 'Hamburger',
      calories: 400,
      image: 'https://i.imgur.com/LoG39wK.jpg',
      quantity: 0,
    },
    {
      name: 'Pad Thai',
      calories: 475,
      image: 'https://i.imgur.com/5ktcSzF.jpg',
      quantity: 0,
    },
    {
      name: 'Almonds',
      calories: 75,
      image: 'https://i.imgur.com/JRp4Ksx.jpg',
      quantity: 0,
    },
    {
      name: 'Bacon',
      calories: 175,
      image: 'https://i.imgur.com/7GlqDsG.jpg',
      quantity: 0,
    },
    {
      name: 'Hot Dog',
      calories: 275,
      image: 'https://i.imgur.com/QqVHdRu.jpg',
      quantity: 0,
    },
    {
      name: 'Chocolate Cake',
      calories: 490,
      image: 'https://i.imgur.com/yrgzA9x.jpg',
      quantity: 0,
    },
    {
      name: 'Wheat Bread',
      calories: 175,
      image: 'https://i.imgur.com/TsWzMfM.jpg',
      quantity: 0,
    },
    {
      name: 'Orange',
      calories: 85,
      image: 'https://i.imgur.com/abKGOcv.jpg',
      quantity: 0,
    },
    {
      name: 'Banana',
      calories: 175,
      image: 'https://i.imgur.com/BMdJhu5.jpg',
      quantity: 0,
    },
    {
      name: 'Yogurt',
      calories: 125,
      image: 'https://i.imgur.com/URhdrAm.png',
      quantity: 0,
    },
  ];

  getFoods(): Food[] {
    return this.foods;
  }

  addFood(foodForAdd: Food): void {
    this.foods.push(foodForAdd);
  }

  getListFood(): Food[] {
    return this.listFood;
  }

  addFoodInList(food: Food): void {
    food.quantity += 1;
    if (this.listFood.length === 0) {
      this.listFood.push(food);
    } else {
      if (!this.listFood.find((item) => item.name === food.name)) {
        this.listFood.push(food);
      }
    }
    this.totalKcal += food.calories;
  }

  getPositionInArray(food: Food): number {
    return this.foods.findIndex((x) => x.name === food.name);
  }

  constructor() {}
}
