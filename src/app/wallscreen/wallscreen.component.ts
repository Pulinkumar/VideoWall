import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wallscreen",
  templateUrl: "./wallscreen.component.html",
  styleUrls: ["./wallscreen.component.css"]
})
export class WallscreenComponent implements OnInit {
  iRows: number[] = [0, 1, 2, 3, 4, 5];
  iCols: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  players: string[];
  teams: string[];

  constructor() {}

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
  }

  btnClick() {
    alert("Hello");
  }

  getPlayers() {
    this.players = [
      "Tolliver, Anthony",
      "Gaddy, Abdul",
      "Randle, Chasson",
      "Milton, Malik",
      "Artis, Jamel",
      "Nunn, Kendrick",
      "Daniels, Troy",
      "Harkless, Maurice",
      "Ferrell, Kevin",
      "Davis, Edward",
      "Johnson, Nicholas",
      "Whitehead, Isaiah"
    ];
  }

  getTeams() {
    this.teams = [
      "Atlanta Dream",
      "Atlanta Hawks",
      "Boston Celtics",
      "Brooklyn Nets",
      "Charlotte Hornets",
      "Chicago Bulls",
      "Chicago Sky",
      "Cleveland Cavaliers",
      "Connecticut Sun",
      "Dallas Mavericks",
      "Houston Rockets",
      "Indiana Pacers"
    ];
  }
}

// _cols = 5;
// _rows = 10;

// get cols() {
//   return Array(this._cols).fill(null).map((el, index) => index);
// }
// get rows() {
//   return Array(this._rows).fill(null).map((el, index) => index);
// }
