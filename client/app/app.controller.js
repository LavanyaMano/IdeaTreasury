

function AppController(postsService) {
    const ctrl = this;

    postsService.getMe().then((me) => {
        ctrl.username = me.username;
    });
}

export default AppController;
