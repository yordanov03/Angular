export class AuthService {
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resole,reject)=>{
                setTimeout(() => {
                    resole(this.loggedIn)
                }, 800);
            }
        )
        return promise
    }

  logIn(){
      this.loggedIn = true;
  }  

  logOut(){
      this.loggedIn = false;
  }
}