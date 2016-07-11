export default class HomeController {

  constructor(rndmNameSvc) {
    this.random = rndmNameSvc;
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }

}

HomeController.$inject = ['randomNamesSvc'];
