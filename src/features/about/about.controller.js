export default class AboutController {

  constructor(rndmNameSvc) {
    this.random = rndmNameSvc;
    this.name = 'Pivotal Tracker Stories';
  }

  changeName() {
    this.name = 'angular-test';
  }

  randomName() {
    this.name = this.random.getName();
  }

}

AboutController.$inject = ['randomNamesSvc'];
