import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  productId: number | null = null;
  product: any = null;

  products = [
    { id: 1, name: "Nike Air Force 1", location: "SM Megamall", price: 5695, details: "White, mid-top, excellent condition." },
    { id: 2, name: "Adidas Ultraboost 22", location: "Trinoma", price: 9500, details: "Black and white, brand new." },
    { id: 3, name: "Converse Chuck Taylor All Star", location: "Robinsons Galleria", price: 3990, details: "Classic black, gently used." },
    { id: 4, name: "Vans Old Skool", location: "Glorietta", price: 4498, details: "Black and white, good condition." },
    { id: 5, name: "Puma Suede Classic", location: "Greenbelt 5", price: 4200, details: "Royal blue, good as new." },
    { id: 6, name: "New Balance 574", location: "SM North EDSA", price: 4995, details: "Gray, slightly worn." },
    { id: 7, name: "Reebok Club C 85", location: "Power Plant Mall", price: 4799, details: "White, excellent condition." },
    { id: 8, name: "Skechers D'Lites", location: "Uptown Mall", price: 3795, details: "White and gray, gently used." },
    { id: 9, name: "Under Armour HOVR Phantom 2", location: "SM Mall of Asia", price: 8100, details: "Black, barely worn." },
    { id: 10, name: "ASICS Gel-Kayano 28", location: "Ayala Malls Feliz", price: 9800, details: "Blue, brand new with box." },
    { id: 11, name: "Hoka One One Clifton 8", location: "Festival Mall", price: 8000, details: "Teal, great for running." },
    { id: 12, name: "Brooks Ghost 14", location: "SM Fairview", price: 7500, details: "Red, very good condition." },
    { id: 13, name: "On Cloud 5", location: "Gateway Mall", price: 8990, details: "White, new with tags." },
    { id: 14, name: "Saucony Endorphin Speed 2", location: "Shangri-La Plaza", price: 7800, details: "Yellow, light use." },
    { id: 15, name: "Jordan 1 Retro High", location: "Market! Market!", price: 12000, details: "Chicago colorway, good condition." },
    { id: 16, name: "Nike Dunk Low", location: "SM Aura Premier", price: 7990, details: "Panda, like new." },
    { id: 17, name: "Adidas Gazelle", location: "SM Baguio", price: 4800, details: "Navy blue, lightly used." },
    { id: 18, name: "Converse Run Star Hike", location: "SM Pampanga", price: 5500, details: "Black, excellent condition." },
    { id: 19, name: "Vans Sk8-Hi", location: "SM Bacoor", price: 4800, details: "Checkerboard print, good condition." },
    { id: 20, name: "Puma RS-X", location: "SM City Cebu", price: 6500, details: "Multicolor, slightly worn." },
    { id: 21, name: "New Balance 990v5", location: "Ayala Center Cebu", price: 11000, details: "Gray, excellent condition." },
    { id: 22, name: "Reebok Instapump Fury", location: "SM Lanang Premier", price: 9000, details: "White, good as new." },
    { id: 23, name: "Skechers Go Walk Arch Fit", location: "Abreeza Mall", price: 3800, details: "Black, gently used." },
    { id: 24, name: "Under Armour Curry 9", location: "SM Seaside City Cebu", price: 9900, details: "Blue and yellow, like new." },
    { id: 25, name: "ASICS Gel-Nimbus 24", location: "Vista Mall", price: 8200, details: "Black, new with box." },
    { id: 26, name: "Hoka Bondi 7", location: "SM Clark", price: 7800, details: "All black, very good condition." },
    { id: 27, name: "Brooks Adrenaline GTS 22", location: "The Podium", price: 7990, details: "Blue, light use." },
    { id: 28, name: "On Cloudventure", location: "SM Baguio", price: 9200, details: "Brown, trail running shoes." },
    { id: 29, name: "Saucony Kinvara 12", location: "SM Dasmariñas", price: 6500, details: "White and red, excellent condition." },
    { id: 30, name: "Jordan 4 Retro", location: "SM Fairview", price: 15000, details: "Black Cat colorway, good condition." }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }
}