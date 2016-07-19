
import {TESTING} from '../../utils/storyTypes';
import {storyTypeClass} from '../../utils/sundry';

export default class TestingController {


  constructor($log, pivotalSvc) {
    this.dataSvc = pivotalSvc;
    this.$log = $log;
    this.storiesInTest = [];

    this.activate();
  }

  activate() {
    const vm = this;
    return vm.getStories(TESTING)
    .then((res) => {
      vm.storiesInTest = res;
    });
  }

  getStories(type) {
    const vm = this;
    // vm.storiesInTest = [];
    return vm.dataSvc.getIterationStories(type)
        .then((data) => { return data; })
        .catch((error) => { vm.$log.debug(error); });
  }

  getStoryTypeClass(type) {
    return storyTypeClass(type);
  }
}

TestingController.$inject = ['$log', 'PivotalDataSvc'];
