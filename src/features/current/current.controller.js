
import {INPROGRESS} from '../../utils/storyTypes';
import {storyTypeClass} from '../../utils/sundry';

export default class CurrentController {


  constructor($log, pivotalSvc) {
    this.dataSvc = pivotalSvc;
    this.$log = $log;
    this.currentStories = [];

    this.activate();
  }

  activate() {
    const vm = this;
    return vm.getStories(INPROGRESS)
    .then((res) => {
      vm.currentStories = res;
    });
  }

  getStories(type) {
    const vm = this;
    vm.currentStories = [];
    return vm.dataSvc.getIterationStories(type)
        .then((data) => { return data; })
        .catch((error) => { vm.$log.debug(error); });
  }

  getStoryTypeClass(type) {
    return storyTypeClass(type);
  }
}

CurrentController.$inject = ['$log', 'PivotalDataSvc'];
