import { Component, OnInit } from '@angular/core';
import { ServerStatusService } from './services/server-status.service';


@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.page.html',
  styleUrls: ['./server-status.page.css'],
  providers: [ServerStatusService]
})
export class ServerStatusPage implements OnInit {

  public mockJson: any;
  total: number = 0;
  connected: number = 0;
  disconnected: number = 0;
  constructor(private statusService: ServerStatusService) { }

  ngOnInit() {
    this.getServerStatusList();
  }

  getServerStatusList() {
    // TO FETCH SERVER'S LIST WITH IT'S STATUS - ONLOAD
    this.statusService.getServerList().subscribe(
      (res) => {
        this.mockJson = res;
        this.setPreCounts(this.mockJson);
      },
      (err) => {
        console.log("Error occured at server-status.page.ts : " + err);
      }
    )

  }

  setPreCounts(serverList: any) {
    this.total = serverList.length;
    serverList.forEach(element => {
      if (element.isConnected) { this.connected++; }
      else { this.disconnected++ }
    });
  }

  showDetails(index: number) {
    if (document.getElementById("Id" + index).hasAttribute("hidden")) {
      document.getElementById("Id" + index).removeAttribute("hidden");
      document.getElementById("arrow" + index).setAttribute("name", "arrow-dropup");
    } else {
      document.getElementById("Id" + index).setAttribute("hidden", "false");
      document.getElementById("arrow" + index).setAttribute("name", "arrow-dropdown");
    }
  }


}
