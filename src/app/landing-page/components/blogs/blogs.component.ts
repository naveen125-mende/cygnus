import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  constructor(private router : Router){}

  selectBlog(){
    this.router.navigate(['/blogs/blog-details'])
  }

}
