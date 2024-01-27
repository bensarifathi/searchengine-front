import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchForm } from 'src/app/models/search-form';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() onSearch = new EventEmitter<SearchForm>();

  constructor() { }

  ngOnInit(): void {
  }
  
  formData : SearchForm = {
    searchInput: '',
    selectedCategory: 0,
    centrality: 'DEGREE_CENTRALITY'
  };

  onSubmit() {
    this.onSearch.emit(this.formData);
    // Add your form submission logic here
  }
}
