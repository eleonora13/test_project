class Singleton {
    constructor() {
        if(!Singleton.instance){
            Singleton.instance = browser;
        }

        return Singleton.instance;
    }
}

module.exports = Singleton;