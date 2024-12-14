import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FabricOption } from '../../app.model';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MockDataService } from '../../services/mock-data.service';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-products-page',
  imports: [MatSliderModule, CommonModule, MatListModule, MatCheckboxModule, ProductComponent],
  standalone: true,
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {

  private productsService = inject(MockDataService);

  allProducts = this.productsService.getData();
  seatings = this.allProducts.seatings;
  tables = this.allProducts.tables;
  beds = this.allProducts.bedRoom;
  storage = this.allProducts.storage;

  chairs = this.seatings.chairs;

  drawers = this.storage.drawers;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.chairs);

  }





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
    { name: 'linen', count: 84 },
    { name: 'wood', count: 84 },

  ];

  tags = ["seating", "storage", "chair", "drawer", "bed", "bedside table", "coffee table", "dining table", "desk"];


  //Tag filter

  selectedTag: string | null = null;
  selectedColor: string | null = null;
  selectedFabric: string | null = null;
  priceRange: string = '£0 - £900';

  paramTag = input.required();


  // if(paramTag){
  //   this.selectedTag = paramTag;
  //   this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);

  // }

  extractPriceRange(priceRange: string): [number, number] {
    const priceMatch = priceRange.match(/£(\d+(?:,\d{3})*(?:\.\d+)?)/g);
    if (priceMatch) {
      const [min, max] = priceMatch.map(price => parseFloat(price.replace(/[,£]/g, '')));
      return [min, max];
    }
    return [0, Infinity]; // Default range if parsing fails
  }


  filteredProducts: any[] = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);;


  selectTag(tag: string): void {
    this.selectedTag = this.selectedTag === tag ? null : tag;
    console.log(this.selectedTag);
    this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);

  }





  filterAndSortProducts(
    products: any,
    selectedTag: string | null,
    selectedColor: string | null,
    selectedFabric: string | null
  ): any[] {
    const allProducts: any[] = [];
    const [minPrice, maxPrice] = this.extractPriceRange(this.priceRange);

    // Recursive function to collect all products
    function collectProducts(obj: any) {
      if (Array.isArray(obj)) {
        allProducts.push(...obj);
      } else if (typeof obj === "object" && obj !== null) {
        Object.values(obj).forEach(value => collectProducts(value));
      }
    }

    collectProducts(products);

    if (selectedTag || selectedColor || selectedFabric || this.priceRange) {
      // Filter products by the provided criteria
      return allProducts.filter(item => {
        const tags = item.tags || [];
        const matchesTag = selectedTag ? tags.includes(selectedTag) : true;
        const matchesColor = selectedColor ? tags.includes(selectedColor) : true;
        const matchesFabric = selectedFabric ? tags.includes(selectedFabric) : true;
        const matchesPrice = item.price >= minPrice && item.price <= maxPrice;

        return matchesTag && matchesColor && matchesFabric && matchesPrice;
      });
    } else {
      // Shuffle the array randomly if no criteria are provided
      return allProducts.sort(() => Math.random() - 0.5);
    }
  }








  //Price Filter

  onPriceChange(event: any) {
    const minValue = event.value[0];
    const maxValue = event.value[1];

    console.log(minValue, maxValue);


    this.priceRange = `£${minValue.toLocaleString()} - £${maxValue.toLocaleString()}`;
  }


  //Color filter



  // Toggle the selected color
  toggleColor(colorName: string) {
    this.selectedColor = this.selectedColor === colorName ? null : colorName;
    console.log('Selected color:', this.selectedColor); // Optional: Debug log
    this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);

  }


  //Fabric filter

  // Function to set the selected fabric
  toggleFabric(fabricName: string) {
    this.selectedFabric = this.selectedFabric === fabricName ? null : fabricName;
    console.log('Selected color:', this.selectedColor); // Optional: Debug log
    this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);

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


}
