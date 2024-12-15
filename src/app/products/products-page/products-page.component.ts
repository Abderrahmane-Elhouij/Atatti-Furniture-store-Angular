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

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   console.log(this.chairs);

  // }



  colors = [
    { name: 'black', hex: '#000000', count: 37 },
    { name: 'white', hex: '#FFFFFF', count: 28 },
    { name: 'blue', hex: '#0000FF', count: 7 },
    { name: 'yellow', hex: '#FFFF00', count: 76 },
    { name: 'brown', hex: '#A52A2A', count: 95 },
    { name: 'green', hex: '#008000', count: 11 },
    { name: 'orange', hex: '#FFA500', count: 4 },
    { name: 'silver', hex: '#C0C0C0', count: 24 },
    { name: 'purple', hex: '#800080', count: 2 },

  ];


  fabricOptions: FabricOption[] = [
    { name: 'wood', count: 5 },
    { name: 'metal', count: 2 },
    { name: 'glass', count: 93 },
    { name: 'oak', count: 23 },
    { name: 'marble', count: 33 },
    { name: 'cotton', count: 84 },


  ];

  tags = ["seating", "storage", "chair", "drawer", "bed", "bedside table", "coffee table", "dining table", "desk", "office", "modern", "classic", "luxury"];


  //Tag filter

  selectedTag: string | null = null;
  selectedColor: string | null = null;
  selectedFabric: string | null = null;

  paramTag = input.required();

  // Pagination logic
  filteredProducts: any[] = [];
  paginatedProducts: any[] = [];
  itemsPerPage: number = 10; // Number of items per page
  currentPage: number = 0;

  // Get total pages based on filtered products
  get totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.filteredProducts.length / this.itemsPerPage) }, (_, i) => i);
  }

  ngOnInit(): void {
    // Initialize with all products first
    this.updateFilteredAndSortedProducts(null, null, null);
  }

  // Update paginated products based on the current page
  updatePaginatedProducts(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  // Set the current page and update paginated products
  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  // Update the filtered and sorted products and handle pagination
  updateFilteredAndSortedProducts(selectedTag: string | null, selectedColor: string | null, selectedFabric: string | null): void {
    this.filteredProducts = this.filterAndSortProducts(this.allProducts, selectedTag, selectedColor, selectedFabric);
    this.currentPage = 0; // Reset to the first page after filtering
    this.updatePaginatedProducts(); // Update the paginated view
  }


  // if(paramTag){
  //   this.selectedTag = paramTag;
  //   this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);

  // }
  minValue = 100;
  maxValue = 1000;

  priceRange: string = `£${this.minValue} - £${this.maxValue}`;


  extractPriceRange(priceRange: string): [number, number] {
    const priceMatch = priceRange.match(/£(\d+(?:,\d{3})*(?:\.\d+)?)/g);
    if (priceMatch) {
      const [min, max] = priceMatch.map(price => parseFloat(price.replace(/[,£]/g, '')));
      return [min, max];
    }
    return [0, Infinity]; // Default range if parsing fails
  }




  selectTag(tag: string): void {
    this.selectedTag = this.selectedTag === tag ? null : tag; // Toggle selection
    this.updateFilteredAndSortedProducts(this.selectedTag, this.selectedColor, this.selectedFabric);
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
    const newValue = event.target.value; // Get the current slider value
    const [currentMin, currentMax] = this.extractPriceRange(this.priceRange); // Extract min and max

    // Determine if newValue should update min or max
    if (newValue < currentMin) {
      // Update minValue if the new value is less than the current min
      this.minValue = newValue;
      this.maxValue = currentMax; // Keep the max unchanged
    } else if (newValue > currentMax) {
      // Update maxValue if the new value is greater than the current max
      this.maxValue = newValue;
      this.minValue = currentMin; // Keep the min unchanged
    } else {
      // Handle the case where newValue is between currentMin and currentMax
      // Determine whether to adjust min or max based on proximity to current values
      const diffToMin = Math.abs(newValue - currentMin);
      const diffToMax = Math.abs(newValue - currentMax);

      if (diffToMin < diffToMax) {
        this.minValue = newValue;
      } else {
        this.maxValue = newValue;
      }
    }

    // Update the price range string
    this.priceRange = `£${this.minValue} - £${this.maxValue}`;


    // // Debugging logs
    // console.log("Current Min:", currentMin);
    // console.log("Current Max:", currentMax);
    // console.log("Updated Min:", this.minValue);
    // console.log("Updated Max:", this.maxValue);
    // console.log("Price Range:", this.priceRange);



  }


  filterPrice(){



    this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);


  }




  // Toggle the selected color
  toggleColor(colorName: string) {
    this.selectedColor = this.selectedColor === colorName ? null : colorName;
    console.log('Selected color:', this.selectedColor); // Optional: Debug log
    this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric);
    this.updateFilteredAndSortedProducts(this.selectedTag, this.selectedColor, this.selectedFabric);
  }


  //Fabric filter

  // Function to set the selected fabric
  toggleFabric(fabricName: string) {
    this.selectedFabric = this.selectedFabric === fabricName ? null : fabricName;
    console.log('Selected color:', this.selectedColor); // Optional: Debug log
    this.filteredProducts = this.filterAndSortProducts(this.allProducts, this.selectedTag, this.selectedColor, this.selectedFabric)
    this.updateFilteredAndSortedProducts(this.selectedTag, this.selectedColor, this.selectedFabric);

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
