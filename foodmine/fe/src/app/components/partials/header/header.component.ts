import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity = 0;
  user!: User;

  constructor(cartService: CartService, private userService: UserService) {
    cartService.getCartObervable().subscribe(newCart => this.cartQuantity = newCart.totalCount);
    userService.userObervable.subscribe((usr) => {
      this.user = usr
    });
   }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }

}
