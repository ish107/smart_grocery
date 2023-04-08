import { Component, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ngOnInit(): void {}

  isDataUploading = false;
  @Output() productAddEvent : EventEmitter<void> = new EventEmitter<void>();
  @Output() closeAddEvent : EventEmitter<void> = new EventEmitter<void>();
  constructor(private fb: FormBuilder,
    private productService: ProductService) {}

  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand : ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
    createdDate: ['', Validators.required],
  });

  get f() {
    return this.productFrom.controls;
  }
  onSubmit(){
    const values = this.productFrom.value as unknown as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res)=>{
      debugger;
      this.isDataUploading = false;
      this.productAddEvent.emit();
      this.productFrom.reset();
    })
  }
  cancel(){
    this.closeAddEvent.emit();
  }


    
    /*alert('ngOnInit called');
      
    console.log('triggered ngOnInit');
      
    }
    ngDoCheck(){
      console.log('triggered ngDoCheck');
    }
    ngAfterContentInit(){
      console.log('triggered ngAfterContentInit');
    }
    ngAfterContentChecked(){
      console.log('triggered ngAfterContentChecked');
    }
    ngAfterViewInit(){
      console.log('triggered ngAfterViewInit');
    }
    ngAfterVierwChecked(){
      console.log('triggered ngAfterViewChecked');
    }
    ngOnDestroy(){
      alert('ngDestroy called');
      console.log('triggerd ngOnDestroy');
    }*/

  }
