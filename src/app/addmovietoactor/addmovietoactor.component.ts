import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovietoactor',
  templateUrl: './addmovietoactor.component.html',
  styleUrls: ['./addmovietoactor.component.css']
})
export class AddmovietoactorComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  actorID: string = "";
  movieID: string = "";
  movie: any;
  constructor(private dbService: DatabaseService, private router: Router) { }
  //Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
  setActorForMovie(actor) {
    this.actorID = actor._id;
  }

  setMovieForAdd(movie) {
    this.movieID = movie._id;
    this.movie = { "id": this.movieID };
  }

  //Add movie to actor
  addMovieToActor() {
    this.dbService.addMovieToActor(this.actorID, this.movie).subscribe(result => {
      this.router.navigate(["/listactors"]);
    })
  }
  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }

}
