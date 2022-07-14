import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // gives the generated componentn a css class
  @HostBinding('attr.class') cssClass = 'row';
  // defines the input that the component can receive
  @Input() article!: Article;

  constructor () {}

  voteUp() : boolean {
    this.article.voteUp();
    return false;
  }

  voteDown() : boolean {
    this.article.voteDown();
    return false;
  }


  ngOnInit(): void {
  }

}
