import { findIndex } from 'ramda';

function AppController(postsAPIService,$state) {
    const ctrl = this;
    ctrl.filter = null;
    postsAPIService.getMe().then((me) => {
        ctrl.currentuser  = me;
    });

    ctrl.filterPost = function filterPost(){
        $state.go('posts',{$stateparams:ctrl.filter});
        ctrl.filter = null;
    }
}
export default AppController;