import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsService } from 'src/api/news-api.services';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FilterComponent } from './components/filter/filter.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { RecentNewsItemComponent } from './components/recent-news-item/recent-news-item.component';
import { FixDataPipe } from './pipes/fix-data.pipe';

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
    FixDataPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
