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
  actorId: string = "";
  movieId: string = "";
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
  
  // Set actor id from the select button on Add Movie to Actor 
  setActorId(item) {
    this.actorId = item._id;
  }

  // Set movie id from the select button on Add Movie to Actor 
  setMovieData(item) {
    this.movieId = item._id;
  }

  //Add a movie to actor by using actor id and the movie json object in movieData
  addMovie() {
    this.dbService.addMovie(this.actorId, { "id": this.movieId }).subscribe(result => {
      this.router.navigate(["/listactors"]);
    })
  }
  
  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }

}
