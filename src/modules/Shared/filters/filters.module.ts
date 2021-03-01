import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { FilterTagsComponent } from './components/filter-tags/filter-tags.component';
import { SortingFilterComponent } from './components/sorting-filter/sorting-filter.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [FilterListComponent, FilterTagsComponent, SortingFilterComponent, SearchBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [FilterListComponent, FilterTagsComponent, SortingFilterComponent, SearchBoxComponent]
})
export class FiltersModule { }
