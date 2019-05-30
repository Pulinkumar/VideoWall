import { VideoService } from "./../video.service";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NbaPlayer } from "../models/nbaplayer";
import { NbaTeam } from "../models/nbateam";

@Component({
  selector: "app-wallscreen",
  templateUrl: "./wallscreen.component.html",
  styleUrls: ["./wallscreen.component.css"]
})
export class WallscreenComponent implements OnInit {
  iRows: number[] = [0, 1, 2, 3, 4, 5];
  iCols: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

  players: NbaPlayer[];
  teams: NbaTeam[];

  videoLinks: string[];
  videoBaseUrl: string = "../../assets/img/";
  //videoBaseUrl: string = "";

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
    this.getVideoLinks();
  }

  openVideo(content) {
    this.modalService.open(content, { centered: true });
  }

  getPlayers() {
    this.videoService.get_Players().subscribe(res => {
      console.log(res);
      this.players = res.slice(0, 10);
    });
  }

  getTeams() {
    this.videoService.get_Teams().subscribe(res => {
      console.log(res);
      this.teams = res.slice(0, 10);
    });
  }

  getVideoLinks() {
    this.videoLinks = this.videoService.getVideoLinks();
  }
  // getPlayers() {
  //   this.players = this.videoService.getPlayers();
  // }

  // getTeams() {
  //   this.teams = this.videoService.getTeams();
  // }
}

// _cols = 5;
// _rows = 10;

// get cols() {
//   return Array(this._cols).fill(null).map((el, index) => index);
// }
// get rows() {
//   return Array(this._rows).fill(null).map((el, index) => index);
// }
