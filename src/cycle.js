import xs from 'xstream';

function loadGithubUsers(sources) {
  const request$ = sources.ACTION
    .filter(action => action.type === 'LOAD_GITHUB_USER')
    .map(action => ({
      url: `https://api.github.com/users/${action.payload}`,
      method: 'GET',
      category: 'github-user',
    }));

  const response$ = sources.HTTP
    .select('github-user')
    .map(resp$ =>
        resp$.replaceError(err =>
          xs.of(err.response),
        ))
    .flatten()
    .map(res => (res.error ?
      { type: 'LOAD_GITHUB_USER_ERROR', payload: JSON.parse(res.text) } :
      { type: 'LOAD_GITHUB_USER_COMPLETED', payload: res.body }
    ))
    .debug();

  return {
    ACTION: response$,
    HTTP: request$,
  };
}

export default loadGithubUsers;
