import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  data = [
    { value: 23, label: 'Favorite' },
    { value: 967, label: 'Page Views' },
    { value: 30, label: 'Users' },
  ];
  itemListData = [
    {
      imageUrl:
        'https://incanda.co.za/wp-content/uploads/2021/04/LIN_2249852-600x600.jpg',
      title: 'Couch',
      description:
        'This is a great couch, the kind that you would want in the house ',
    },
    {
      imageUrl:
        'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202241/0025/keira-solid-wood-6-drawer-dresser-34-z.jpg',
      title: 'Dresser',
      description:
        'This is a great dresser, the kind that you would want in the house ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
