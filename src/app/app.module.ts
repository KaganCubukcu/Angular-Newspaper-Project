import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { HeaderComponent } from './components/header.component';
import { NavbarComponent } from './components/navbar.component';
import { NewsService } from 'src/api/news-api.services';
import { CategoriesComponent } from './pages/categories.component';
import { FilterComponent } from './components/filter.component';
import { CategoryDetailComponent } from './pages/category-detail.component';
import { RecentNewsItemComponent } from './components/recent-news-item.component';
import { FixDatePipe } from './pipes/fix-date.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    CategoriesComponent,
    FilterComponent,
    CategoryDetailComponent,
    RecentNewsItemComponent,
    FixDatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
