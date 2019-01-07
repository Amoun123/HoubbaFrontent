import { Component, OnInit } from '@angular/core';
import { ServerService} from '../server.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Marsupilamis} from 'src/app/interfaces/marsupilamis';
@Component({
  selector: 'app-marsupilami',
  templateUrl: './marsupilami.component.html',
  styleUrls: ['./marsupilami.component.css']
})
export class MarsupilamiComponent implements OnInit {
  mars: Marsupilamis[];
  _id: any;

  newmars: Marsupilamis = {
    Nom: '',
    famille: '',
    age: '',
    race: '',
    nourriture: '',
    username: '',
    pass: '',

  };

  constructor(private marsupilamiService: ServerService) {
  }

  ngOnInit() {

    this.marsupilamiService.getAll()
      .subscribe(result => {
        console.log(result);
        this.mars = result;
      }, failure => {
        console.error(failure);
      });

  }

  onSubmit() {
    this.marsupilamiService.add(this.newmars)
      .subscribe(result => {

        console.log(result);
        // this.router.navigate(['merci']);
        this.newmars = {
          Nom: '',
          famille: '',
          age: '',
          race: '',
          nourriture: '',
          username: '',
          pass: '',

        };

      }, err => {
        console.error(err);
        window.alert('est un erreur ');
      });
  }

  onReset() {
    this.newmars = {
      Nom: '',
      famille: '',
      age: '',
      race: '',
      nourriture: '',
      username: '',
      pass: '',

    };
  }


delete(mars: Marsupilamis) {
    if (window.confirm('Tu est sur ?')) {
      this.marsupilamiService.delete(mars._id).subscribe(
        response => this.mars = this.mars.filter(mars => mars !== mars), );
    }
  }

}
