
import * as types from '../../utils/storyTypes';
import {storyTypeClass} from '../../utils/sundry';

export default class HomeController {


  constructor($q, $log, pivotalSvc) {
    this.dataSvc = pivotalSvc;
    this.$q = $q;
    this.$log = $log;
    this.project = {};
    this.storiesInProgress = [];
    this.storiesDone = [];
    this.storiesInTest = [];
    this.isLoading = false;

    this.activate();
  }

  activate() {
    const vm = this;

    return vm.$q.all(
      [
        vm.getStories(types.INPROGRESS),
        vm.getStories(types.DONE),
        vm.getStories(types.TESTING)
      ]
    ).then((res) => {
      vm.storiesInProgress = res[0];
      vm.storiesDone = res[1];
      vm.storiesInTest = res[2];
    });
  }

  isProjectEmpty() {
    return this.project === {};
  }

  getStories(type) {
    const vm = this;
    return vm.dataSvc.getIterationStories(type)
        .then((data) => { return data; })
        .catch((error) => { vm.$log.debug(error); });
  }

  getStoryTypeClass(type) {
    return storyTypeClass(type);
  }

  isHomePage() {
    return true;
  }

  // clickMe() {
  //   const vm = this;
  //   this.getProject().then((prjt) => {
  //     vm.project = prjt;
  //   });
  // }
  //
  // getProject() {
  //   const vm = this;
  //   return vm.dataSvc.getProjectDetail()
  //       .then((data) => { return data; })
  //       .catch((error) => { vm.isLoading = false; vm.$log.debug(error); });
  // }
}

HomeController.$inject = ['$q', '$log', 'PivotalDataSvc'];
