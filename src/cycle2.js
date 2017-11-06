import xs from 'xstream';

function loadGithubUsers2(sources) {
  const request$ = sources.ACTION
    .filter(action => action.type === 'DUMMY_ACTION_WITH_NO_HANDLERS')
    .map(() => ({
      url: '',
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
      { type: 'LOAD_GITHUB_USER_ERROR2', payload: JSON.parse(res.text) } :
      { type: 'LOAD_GITHUB_USER_COMPLETED2', payload: res.body }
    ))
    .debug();

  return {
    ACTION: response$,
    HTTP: request$,
  };
}

export default loadGithubUsers2;
