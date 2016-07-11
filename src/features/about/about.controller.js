
export default class AboutController {


  constructor($q, $log, pivotalSvc) {
    this.dataSvc = pivotalSvc;
    this.$q = $q;
    this.$log = $log;
    this.project = {};
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

  clickMe() {
    const vm = this;
    vm.isLoading = true;
    this.getPivotalProject().then((prjt) => {
      vm.project = prjt;
      vm.isLoading = false;
    });
  }

  getPivotalProject() {
    const self = this;
    return this.dataSvc.getProjectDetail()
        .then((data) => { return data; })
        .catch((error) => { vm.isLoading = false; self.$log.debug(error); });
  }
}

AboutController.$inject = ['$q', '$log', 'PivotalDataSvc'];
