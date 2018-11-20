import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';//DD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { resolve } from 'url';
import { reject, async } from 'q';
import { setTimeout } from 'timers';
import { promise } from 'protractor';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  //#region - Variable
  //App URL
  todoURL = 'http://localhost:3007/api/todo/';

  //Get ToDo by current user
  todoCurrentUser: any;
  todoCurrentUserToDo: any;
  todoCurrentUserDone: any;
  todoCurrentUserURL = this.todoURL + 'user/Ayyapan.Anbalagan@ey.com';

  //Update Color
  putColorURL: any;
  putColorRes: any;

  //Update Status
  putStatusURL: any;
  putStatusRes: any;

  //#endregion

  //#region Page Load

  ngOnInit() {
    this.getTodoCurrentUser();
  }

  //#endregion

  //#region - Events

  //Event:Click - Color change

  ondblclick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.attributes.id.nodeValue;
    var color = target.attributes.class.nodeValue;
    var parcolor;
    if (color === "Red") {
      parcolor = "Green"
    } else {
      parcolor = "Red"
    }
    this.putColorURL = this.todoURL + "changecolor/" + id + "/" + parcolor;
    this.putUpdateColor();
    document.getElementById(id).className = parcolor;
  }

  //Event: Drop 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      //Start:Drop Status Change Code
      var dropContainerID = event.item.dropContainer.id; // Get Status value from div ID
      var cardID = event.item.element.nativeElement.id;
      cardID = cardID.replace("ID", '');
      this.putStatusURL = this.todoURL + "changestatus/" + cardID + "/" + dropContainerID;
      this.putUpdateStatus();
      //End: Drop Status change code

      //var ele = document.getElementById(event.item.element.nativeElement.lastElementChild.lastElementChild.id);
      //ele.className = event.item.element.nativeElement.lastElementChild.lastElementChild.className;
    }
  }
  //#endregion

  //#region - Methods

  // Get to do in seperate list by status
  getTodoCurrentUser(): void {
    this.serviceGetCurrentUser()
      .subscribe(
        todoCurrentUser => {
          this.todoCurrentUser = todoCurrentUser;
          this.todoCurrentUserToDo = this.todoCurrentUser.filter(
            todoitem => todoitem.Status === "ToDo");
          this.todoCurrentUserDone = this.todoCurrentUser.filter(
            todoitem => todoitem.Status === "Done");
        })
  }
  serviceGetCurrentUser() {
    return this.http
      .get<any[]>(this.todoCurrentUserURL)
      .pipe(map(data => data));
  }

  //Put Change Status
  putUpdateStatus(): void {
    this.serverUpdateStaus()
      .subscribe(
        putStausRes => {
          this.putStatusRes = putStausRes;
          var res = JSON.parse(this.putStatusRes);
          if (res.status === 200) {
          }
        }
      )
  }
  serverUpdateStaus() {
    return this.http
      .put(this.putStatusURL, this.httpOptions);
  }

  //Put Update Color
  putUpdateColor(): void {
    this.serviceUpdateColor()
      .subscribe(
        putColorRes => {
          this.putColorRes = putColorRes;
          var res = JSON.parse(this.putColorRes);
          if (res.status === 200) {
          }
        })
  }
  serviceUpdateColor() {
    return this.http
      .put(this.putColorURL, this.httpOptions);
  }
  //#endregion

}
