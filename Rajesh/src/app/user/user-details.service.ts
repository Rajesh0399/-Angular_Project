import { Injectable } from '@angular/core';

type UserData = {
  Name: string;
  Email: string;
  Phone: string;
  Role: string;
  Status: string;
  Action: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  items = [
    {
      Name: 'Rahul Singh',
      Email: 'Rakesh.kumar@garuduav.com',
      Phone: '999999999999',
      Role: 'Admin',
      Status: 'Active',
      Action: '@action-handle',
    },
  ];
  constructor() {}
  getUserList() {
    if (this.items.length == 1) {
      const localStorageData: any = localStorage.getItem('userData');
      const userData = JSON.parse(localStorageData);
      if (Array.isArray(userData)) this.items = this.items.concat(userData);
    }
    return this.items;
  }
  addUsers(val: UserData) {
    const localStorageData: any = localStorage.getItem('userData');
    const userData = JSON.parse(localStorageData) || [];
    userData.push(val);
    localStorage.setItem('userData', JSON.stringify(userData));
    this.items.push(val);
  }
}
