import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public rowIndex! :  number;
  public isLoading = false;
  public showAddProduct! : boolean;
  public isRowSelected! : boolean;
  public showEditProduct! : boolean;
  public selectedProduct! : Product;
  public selectedProductId! : number;
  

  constructor(private productService: ProductService){}
  ngOnInit(): void {    
    this.getProducts(); 
  }   
  /*public firstProductItemName ="White Basmathi Rice";
  public getQuantityofRice(){
    return 350;
  }

  public isLowInventry = false;
  public dhalStorage = 10;
  public sugarStorage = 1200;
  public isStorage = false;
  
 
  

  public getDhalStorage(){
    if(this.dhalStorage<50){
      this.isLowInventry=true;
    }
    return this.dhalStorage;
  }

  public getSugarStorage(){
    if(this.sugarStorage>=1000){
      this.isStorage = true;
    }
    return this.sugarStorage;
  }*/

  public products: Product[] = [];

  /*public products = [{
    'productId' : "001",
    'productName' : "White Basmathi Rice",
    'createdDate': "Jan 29, 2020",
    'quantity': 100,
    'unitPrice': "400",
    'productDescription':"White Basmathi Rice imported from pakistan. High quality rice with extra fragrance Organically grown"
  },
  { 
  'productId' : "002",
  'productName' : "Flour",
  'createdDate': "Jan 29, 2020",
  'quantity': 50,
  'unitPrice': "190",
  'productDescription':"Super Fine Whole grain general Purpose flour"
  },
  
  { 
    'productId' : "003",
    'productName' : "sugar",
    'createdDate': "Jan 29, 2020",
    'quantity': 1200,
    'unitPrice': "200",
    'productDescription':"White sugar manufactured by Palwatte Factory"
  },{
    'productId' : "004",
    'productName' : "Dhal",
    'createdDate': "Jan 29, 2020",
    'quantity': 10,
    'unitPrice': "200",
    'productDescription':"Imported mysoor dhal from India"
  }
  
  ]*/

  public selectProduct(selectedRow:number, product : Product){
    this.rowIndex = selectedRow;
    this.selectedProduct = product;
  }

  showAddProducts(){
    this.showAddProduct = true;
  }

  hideAddProducts(){
    this.showAddProduct = false;
  }
  refresh() {
    this.getProducts();
  }
  getProducts(){
    this.isLoading = true;
    this.productService.getProducts().subscribe((res)=>{
      this.products = res.data;
      this.isLoading = false;
    });
  }

  openEditProductView() {
    if (this.showAddProduct) {
      this.showAddProduct = false;
    }
    this.showEditProduct = true;
  }

  closeEditView() {
    this.showEditProduct = false;
  }

  updateProductList() {
    this.getProducts();
  }
}
function ViewProductComponent(ViewProductComponent: any) {
  throw new Error('Function not implemented.');
}


