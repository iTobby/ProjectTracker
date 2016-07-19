export const PROJECT_ID = '442903';
export const ROOT_URL = 'https://www.pivotaltracker.com/services/v5';
export const api = {
  project: {
    method: 'GET',
    url: `${ROOT_URL}/projects/${PROJECT_ID}`
  },
  iterations : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations`
  },
  storiesInTesting : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=done_current`
  },
  storiesDone : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=done`
  },
  storiesInProgress : {
    method: 'GET',
    // cache: true,
    // url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=current`
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=current_backlog`
  },
  storiesInPlanning : {
    method: 'GET',
    // cache: true,
    // url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=current`
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=backlog`
  },

};
