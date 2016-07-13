
import * as types from '../../utils/storyTypes';

export default class HomeController {


  constructor($q, $log, pivotalSvc) {
    this.dataSvc = pivotalSvc;
    this.$q = $q;
    this.$log = $log;
    this.project = {};
    this.stories = [];
    this.isLoading = false;

    //this.activate();
  }
  //
  // activate() {
  //
  // }
  isProjectEmpty() {
    return this.project === {};
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


  getCurrentStories() {
    const vm = this;
    this.getStories(types.CURRENT)
      .then((stories) => { vm.stories = stories; });
  }

  getDoneStories() {
    const vm = this;
    this.getStories(types.DONE)
      .then((stories) => { vm.stories = stories; });
  }

  clickMe() {
    const vm = this;
    this.getProject().then((prjt) => {
      vm.project = prjt;
    });
  }

  getStories(type) {
    const vm = this;
    vm.stories = [];
    return vm.dataSvc.getIterationStories(type)
        .then((data) => { return data; })
        .catch((error) => { vm.isLoading = false; vm.$log.debug(error); });
  }

  getProject() {
    const vm = this;
    return vm.dataSvc.getProjectDetail()
        .then((data) => { return data; })
        .catch((error) => { vm.isLoading = false; vm.$log.debug(error); });
  }
}

HomeController.$inject = ['$q', '$log', 'PivotalDataSvc'];
