import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [FooterComponent],
})
export class SharedModule {}
