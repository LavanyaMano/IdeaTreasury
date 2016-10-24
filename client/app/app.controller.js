
function AppController() {
    const ctrl = this;

    ctrl.setMode= function setMode(mode){
        switch(mode){
            case "home":
                ctrl.userMode=false;
                ctrl.postMode=false;
                ctrl.homeMode=true;
                break;
            case "user":
                ctrl.userMode=true;
                ctrl.postMode=false;
                ctrl.homeMode=false;
                break;
            case "post":
                ctrl.userMode=false;
                ctrl.postMode=true;
                ctrl.homeMode=false;
                break;
            default:
                ctrl.userMode=false;
                ctrl.postMode=false;
                ctrl.homeMode=true;
                break;
        }
    }
}
export default AppController;
