import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'PokeAngular';

    constructor(public http: HttpClient) {
    }

    ping() {
        this.http.get("https://localhost:8000/api").subscribe(
            (data) => console.log(data),
            (err) => console.log(err)
        );
    }


}
