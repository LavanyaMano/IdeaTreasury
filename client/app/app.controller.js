import { findIndex } from 'ramda';

function AppController(postsAPIService,$interval) {
    const ctrl = this;

    postsAPIService.getMe().then((me) => {
        ctrl.currentuser  = me;
    });

}
export default AppController;