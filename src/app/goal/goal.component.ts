import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals: Goal[] = [
    new Goal(1, 'A quote Example:', 'Azimio and UDA are just parties full of comedians laughing at Kenyans', new Date(2022,1,9)),
    // new Goal(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2019,9,19)),
    // new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2019,9,19)),
    // new Goal(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2019,6,9)),
    // new Goal(5,'Solve math homework','Damn Math', new Date(2019,6,9)),
    // new Goal(6,'Plot my world domination plan','Cause I am an evil overlord', new Date(2019,6,9)),
  ];


toggleDetails(index){
  this.goals[index].showDescription = !this.goals[index].showDescription;
}
completeGoal(isComplete, index){
  if (isComplete) {
    this.goals.splice(index,1);
  }
}
deleteGoal(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you very sure you want to delete ${this.goals[index].name}?`)

    if (toDelete){
      this.goals.splice(index,1)
    }
  }
}
addNewGoal(goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)
}
constructor() { }

ngOnInit() {
}
}
