
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy, DecimalPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//#region routing
import { routing, appRoutingProviders } from '../app/app.routing';
//#endregion routing

//#region agregar componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponents } from './components/sidebar/sidebar.component';
//#endregion agregar componentes

//#region importar modulos
import { LoginModule } from './modules/login/login.module';
//#endregion importar modulos

//#region modulos externos
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
//#endregion modulos externos


import { DialogModule } from '@syncfusion/ej2-angular-popups';

//#DatePicker
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
//#EndDatePicker

//#MultiSelect
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
//#EndMultiSelect


//#SideBarStep
import {MatStepperModule} from '@angular/material/stepper';
import { MatRippleModule } from '@angular/material/core';

import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,MatFormFieldModule,MatButtonModule } from '@angular/material'


import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponents,
    HomeComponent,
    DatePickerComponent,
    MultiSelectComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule
    NgxSpinnerModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DateRangePickerModule,
    MultiSelectModule,
    MatStepperModule,
    MatRippleModule,
    modules,
    SidebarModule,
    TreeViewModule,
    DropDownListModule,
    DialogModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    appRoutingProviders,
    DecimalPipe
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }

