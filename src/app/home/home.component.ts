import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public pokemons: Array<any> = [];

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {

        this.httpClient
            .get("https://localhost:8000/api/pokemon")
            .subscribe(
                (data:any) => {
                    this.pokemons = data['hydra:member']
                    console.log(this.pokemons)
                },
                (err) => console.log(err),
            );
    }

}
