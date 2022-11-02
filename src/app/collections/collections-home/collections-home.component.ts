import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Nando', age: 24, job: 'Data Engineer' },
    { name: 'Chicken', age: 23, job: 'Software Engineer' },
    { name: 'Bingani', age: 25, job: 'CEO' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
