export class CounterService {
    

    activeToInactive = 0;
    inactiveToActive = 0;

    setActiveToInactive(){
        this.activeToInactive++;
        console.log('Active to inactive ' + this.activeToInactive)
    }

    setInactiveToActive(){
        this.inactiveToActive++;
        console.log('Inactive to active '+ this.inactiveToActive)
    }
}