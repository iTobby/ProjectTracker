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
  doneCurrentStories : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=done_current`
  },
  doneStories : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=done`
  },
  currentStories : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=current`
  }
};
