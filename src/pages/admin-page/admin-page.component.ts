import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddProductPopupComponent } from '../../components/add-product-popup/add-product-popup.component';
import { DataService } from '../../service/data.service';

export interface DialogData {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-admin-page',
  imports: [MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  readonly id = model();
  readonly name = model('');
  readonly price = model();
  constructor(private dialog: MatDialog, private dataService: DataService) {}

  handleAddProducts() {
    const dialogRef = this.dialog.open(AddProductPopupComponent, {
      width: '60%',
      data: {
        id: this.id(),
        name: this.name(),
        price: this.price(),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        console.log(result);
      }
    });
  }
}
