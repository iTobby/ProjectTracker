
import * as types from '../../utils/storyTypes';

export default class HomeController {


  constructor($q, $log, pivotalSvc) {
    this.dataSvc = pivotalSvc;
    this.$q = $q;
    this.$log = $log;
    this.project = {};
    this.doneStories = [];
    this.currentStories = [];
    this.isLoading = false;

    this.activate();
  }

  activate() {
    const vm = this;

    return vm.$q.all(
      [this.getDoneStories(),
        this.getCurrentStories()]
    ).then((res) => {
      vm.currentStories = res[0];
      vm.doneStories = res[1];
    });
    // this.getDoneStories();
    // this.getCurrentStories();
  }



  isProjectEmpty() {
    return this.project === {};
  }

  getCurrentStories() {
    return this.getStories(types.CURRENT);
  }

  getDoneStories() {
    return this.getStories(types.DONE);
      // .then((stories) => { vm.stories = stories; });
  }

  getStories(type) {
    const vm = this;
    vm.stories = [];
    return vm.dataSvc.getIterationStories(type)
        .then((data) => { return data; })
        .catch((error) => { vm.isLoading = false; vm.$log.debug(error); });
  }


  panelTypeClass(type) {
    switch (type) {
      case "bug":
        return "panel-warning";
      case "feature":
        return "panel-primary";
      case "chore":
        return "panel-success";
      default:
        return "panel-danger"
    }
  }

  clickMe() {
    const vm = this;
    this.getProject().then((prjt) => {
      vm.project = prjt;
    });
  }

  getProject() {
    const vm = this;
    return vm.dataSvc.getProjectDetail()
        .then((data) => { return data; })
        .catch((error) => { vm.isLoading = false; vm.$log.debug(error); });
  }
}

HomeController.$inject = ['$q', '$log', 'PivotalDataSvc'];
