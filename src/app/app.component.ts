import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  onClickOpenDialog() {
    import('./edit-profile-dialog/edit-profile-dialog.component').then((m) => {
      this.dialog.open(m.EditProfileDialogComponent, {
        maxWidth: '600px',
        width: '100%',
      });
    });
  }
}
