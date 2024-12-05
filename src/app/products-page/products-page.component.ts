import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FabricOption } from '../app.model';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MockDataService } from '../services/mock-data.service';
import { ProductComponent } from "../product/product.component";


@Component({
  selector: 'app-products-page',
  imports: [MatSliderModule, CommonModule, MatListModule, MatCheckboxModule, ProductComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  private productsService = inject(MockDataService);

  allProducts = this.productsService.getData(); 
  seatings = this.allProducts.seatings;
  tables = this.allProducts.tables;
  beds = this.allProducts.bedRoom;
  storage = this.allProducts.storage;

  chairs = this.seatings.chairs;  

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.chairs);
  
}  

  filteredProducts: any[] = []; 


  tagCategory: string = '';
  tagType: string = '';



  
  colors = [
    { name: 'Black', hex: '#000000', count: 37 },
    { name: 'Blue', hex: '#0000FF', count: 7 },
    { name: 'Golden Oak', hex: '#D4AF37', count: 76 },
    { name: 'Dark Brown', hex: '#654321', count: 95 },
    { name: 'Green', hex: '#008000', count: 11 },
    { name: 'Light Oak', hex: '#C8B560', count: 28 },
    { name: 'Red', hex: '#FF0000', count: 4 },
    { name: 'Silver', hex: '#C0C0C0', count: 24 },
  ];

    fabricOptions: FabricOption[] = [
      { name: 'cotton', count: 5 },
      { name: 'silk', count: 2 },
      { name: 'wool', count: 93 },
      { name: 'polyester', count: 23 },
      { name: 'rayon', count: 33 },
      { name: 'rayon', count: 81 },
      { name: 'linen', count: 84 },
      
    ];

  fabrics = ['cotton', 'silk', 'wool', 'polyester', 'rayon', 'linen'];

  // tags = [
  //   "rustic",
  //   "dining table",
  //   "wood",
  //   "metal",
  //   "dining room",
  //   "modern",
  //   "unique",
  //   "minimalist",
  //   "glass",
  //   "luxury",
  //   "velvet",
  //   "desk",
  //   "computer",
  //   "office",
  //   "compact",
  //   "classic",
  //   "oak",
  //   "vintage",
  //   "walnut",
  //   "white",
  //   "writing",
  //   "storage",
  //   "cabinet",
  //   "drawer",
  //   "mobile",
  //   "chest",
  //   "metal",
  //   "rattan",
  //   "adjustable",
  //   "shelving",
  //   "5-tier",
  //   "corner",
  //   "industrial",
  //   "modular",
  //   "rustic", // Added from diningTables
  //   "open",
  //   "stylish",
  //   "unique", // Added from shelving
  //   "bed",
  //   "tufted",
  //   "blue",
  //   "minimalist", // Added from beds
  //   "black",
  //   "romantic",
  //   "elegant",
  //   "plush"
  // ];

  tags = ["seatings", "tables", "bedRoom", "storage"];
  

  //Tag filter
  selectedTag: string | null = null;

  selectTag(tag: string): void {
    this.selectedTag = this.selectedTag === tag ? null : tag;
  }

  


  //Price Filter
  priceRange: string = '£0 - £2,000';

  onPriceChange(event: any) {
    const minValue = event.value[0];
    const maxValue = event.value[1];

    console.log(minValue, maxValue);
    

    this.priceRange = `£${minValue.toLocaleString()} - £${maxValue.toLocaleString()}`;
  }


  //Color filter
  selectedColors: string[] = [];


  toggleColor(color: string) {
    if (this.selectedColors.includes(color)) {
      this.selectedColors = this.selectedColors.filter(c => c !== color);
    } else {
      this.selectedColors.push(color);
    }
  }


  //Fabric filter
  selectedFabrics: string[] = [];

  toggleFabric(fabric: string) {
    if (this.selectedFabrics.includes(fabric)) {
      this.selectedFabrics = this.selectedFabrics.filter(f => f !== fabric);
    } else {
      this.selectedFabrics.push(fabric);
    }
  }

  getFabricColor(fabricName: string): string {
   
    switch (fabricName) {
      case 'Alpaca wollen fabric': return 'bg-gray-200';
      case 'Boiled wollen fabric': return 'bg-gray-400';
      case 'Chenille Fabric': return 'bg-gray-500';
      case 'Crepe Fabric': return 'bg-gray-600';
      case 'Flannel fabric': return 'bg-gray-700';
      case 'Jute fabric': return 'bg-gray-800';
      case 'Swatches fabric': return 'bg-gray-900';
      case 'Tow sad wollen fabric': return 'bg-gray-300';
      case 'Wollen fabric': return 'bg-gray-100';
      default: return 'bg-gray-300'; // Default color
    }
  }
  

  
  // flattenData(data: any) {
  //   this.allProducts = [];
  //   for (const category in data) {
  //     if (this.tagCategory && category !== this.tagCategory) {
  //       continue; // Skip categories that don't match the selected tagCategory
  //     }
  //     for (const productType in data[category]) {
  //       if (this.tagType && productType !== this.tagType) {
  //         continue; // Skip product types that don't match the selected tagType
  //       }
  //       this.allProducts = this.allProducts.concat(data[category][productType]);
  //     }
  //   }
  // }

  filterProducts() {
    
    

  }

  // // Methods to handle tagCategory and tagType selection
  // selectTagCategory(category: string) {
  //   this.tagCategory = category;
  //   this.tagType = ''; // Reset tagType when tagCategory changes
  //   this.flattenData(this.mockDataService.data); // Re-flatten data based on new tagCategory
  //   this.applyFilters();
  // }

  // selectTagType(type: string) {
  //   this.tagType = type;
  //   this.flattenData(this.mockDataService.data); // Re-flatten data based on new tagType
  //   this.applyFilters();
  // }


}
