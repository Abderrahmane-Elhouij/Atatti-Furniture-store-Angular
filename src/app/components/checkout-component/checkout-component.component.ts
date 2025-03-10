// checkout.component.ts
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.css']
})

export class CheckoutComponent {

  faCcVisa = faCcVisa;
  faCcPaypal = faCcPaypal;
  faCcMastercard = faCcMastercard;
  faCcAmex = faCcAmex;

}
