
import {DONE} from '../../utils/storyTypes';
import {storyTypeClass} from '../../utils/sundry';

export default class DoneController {


  constructor($log, pivotalSvc) {
    this.dataSvc = pivotalSvc;
    this.$log = $log;
    this.storiesDone = [];

    this.activate();
  }

  activate() {
    const vm = this;
    return vm.getStories(DONE)
    .then((res) => {
      vm.storiesDone = res;
    });
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
}

DoneController.$inject = ['$log', 'PivotalDataSvc'];
