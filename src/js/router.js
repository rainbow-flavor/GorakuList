import indexContent from '../views/index.html';
import errorContent from '../views/404.html';
import csContent from '../views/cs.html';
import searchContent from '../views/search.html';

const router = {
    index: indexContent,
    error: errorContent,
    cs: csContent,
    search: searchContent,
};

window.onRouterChange = function (dist) {
    document.getElementById('content-placeholder').innerHTML = router[dist];
}