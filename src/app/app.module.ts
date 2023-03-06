import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecentNewsComponent } from './components/recent-news/recent-news.component';
import { NewsService } from 'src/api/news-api.services';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FilterComponent } from './components/filter/filter.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    RecentNewsComponent,
    CategoriesComponent,
    FilterComponent,
    NewsContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
