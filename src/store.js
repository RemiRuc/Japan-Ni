import dataCities from '@/dataCities.js';

class slideStore{
    constructor () {
        this.actual=0,
        this.actualKanji="",
        this.link=false
    }

    refresh(val){
        this.actual = val;
        this.actualKanji = dataCities.cities[this.link[val].id]['kanji'];
    }
}

let slide_store = new slideStore();

export default slide_store;