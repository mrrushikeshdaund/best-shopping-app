import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DialogData } from '../../pages/admin-page/admin-page.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-product-popup',
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './add-product-popup.component.html',
  styleUrl: './add-product-popup.component.scss',
})
export class AddProductPopupComponent {
  readonly dialogRef = inject(MatDialogRef<AddProductPopupComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  id: number = this.data.id;
  name: string = this.data.name;
  price: number = this.data.price;

  constructor(private dataService: DataService) {}

  handleOnAdd() {
    this.dialogRef.close({
      id: Number(this.id),
      name: this.name,
      price: Number(this.price),
    });

    const product = {
      id: Number(this.id),
      name: this.name,
      price: this.price,
    };
    this.dataService.postProduct(product).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        alert('Product added successfully!');
      },
      error: (error) => {
        console.error('Error adding product:', error);
        alert('Failed to add the product. Please try again.');
      },
      complete: () => {
        console.log('Product post request completed.');
      },
    });
  }

  handleOnClose() {
    this.dialogRef.close();
  }
}
