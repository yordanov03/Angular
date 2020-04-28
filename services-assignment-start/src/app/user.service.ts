import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService{
    inactiveUsers = ['Chris', 'Manu']
    activeUsers = ['Max', 'Anna']

    constructor(private counterService: CounterService){}


    setInactive(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.setActiveToInactive();
    }
    setActive(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.setInactiveToActive();
    }
}