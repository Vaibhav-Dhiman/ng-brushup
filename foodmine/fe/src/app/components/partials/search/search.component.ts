import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm= '';

  constructor(activatedRoute: ActivatedRoute, private readonly router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    })
  }

  ngOnInit(): void {
  }

  search(term: string) {
    if(term.length > 0) {
      this.router.navigateByUrl('/search/' + term);
    }
    if(term.length === 0) {
      this.router.navigateByUrl('/');
    }
  }

}
