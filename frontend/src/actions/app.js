export const UPDATE_PAGE = 'UPDATE_PAGE';

export const navigate = (path) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));
};

const loadPage = (page) => async (dispatch) => {
  switch(page) {
    case 'home':
      await import('../components/weave-assign-orders.js');
      break;
    // case 'about':
    //   import('../components/weave-about.js');
    //   break;
    
    default:
      page = 'view404';
      import('../components/weave-error404.js');
  }

  dispatch(updatePage(page));
};

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
};
