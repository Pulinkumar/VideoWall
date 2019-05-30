import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NbaPlayer } from "./models/nbaplayer";
import { NbaTeam } from "./models/nbateam";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  baseUrl: string = "http://njvdwebfarm01:4546/api/video";

  constructor(private httpClient: HttpClient) {}

  get_Players(): Observable<NbaPlayer[]> {
    return this.httpClient.get<NbaPlayer[]>(this.baseUrl + "/topplayers");
  }

  get_Teams(): Observable<NbaTeam[]> {
    return this.httpClient.get<NbaTeam[]>(this.baseUrl + "/getTeams");
  }

  getVideoLinks() {
    return [
      "o1.jpg",
      "o2.jpg",
      "o3.jpg",
      "o4.jpg",
      "o5.png",
      "o6.jpg",
      "o7.jpg",
      "o8.jpg",
      "s1.jpg",
      "s2.jpg",
      "s3.jpg",
      "s4.jpg",
      "t1.jpg",
      "t2.jpg",
      "t3.jpg",
      "t4.jpg",
      "t5.jpg",
      "t6.jpg",
      "t7.jpg",
      "t8.jpg",
      "s5.jpg",
      "s6.jpg",
      "s7.jpg",
      "s8.jpg",
      "s9.jpg",
      "s10.jpg",
      "s11.jpg",
      "s12.jpg",
      "s13.jpg",
      "s14.jpg",
      "s15.jpg",
      "s16.jpg",
      "s17.jpg",
      "s18.jpg",
      "s19.jpg",
      "s20.jpg",
      "s21.jpg",
      "s22.jpg",
      "s23.jpg",
      "s24.jpg",
      "s25.jpg",
      "s26.jpg",
      "s27.jpg",
      "s28.jpg",
      "s29.jpg"
    ];
  }

  getPlayers() {
    return [
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
    return [
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
