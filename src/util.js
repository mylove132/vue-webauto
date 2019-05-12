import Cookies from 'js-cookies'
let prefix = "";

const  set = (key, value) => {

    let vEnd =3600;//设置cookie的有效期为1小时

    Cookies.setItem(prefix + key, value,vEnd);
};

const get = (key) => {
    let k = prefix + key;
    return Cookies.getItem(k);
};

const remove = (key) =>{
    return Cookies.removeItem(prefix+key)
}

export default {
    set,
    get,
    remove
};