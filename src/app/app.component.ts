import { Component, OnInit, VERSION } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  yourName;
  dataBrute;
  data;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataBrute = this.dataService.getUsersData();
    this.data = this.dataBrute;
  }

  afficherTexteInputRecu(content: string) {
    console.log("Contenu reçu : ", content);
    this.data = this.dataBrute.filter(x =>
      x.name.first.toLowerCase().includes(content.toLowerCase())
    );
    // Grâce au lowercaser le test est :
    // Si dans le input j'ai 'ChiAra'
    // chiara.includes(chiara)
  }
}
