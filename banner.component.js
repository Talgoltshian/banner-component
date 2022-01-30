let displayedBanners = [];

const onClickSaveData = () => {
    window.localStorage.setItem('banners-data' , JSON.stringify(displayedBanners));

}
const createNewBanner = (element_id, redirect_link, banner_img) => {
    if (!redirect_link || !banner_img) return null;
    const element = document.createElement('img');
    element.classList.add('banner');
    element.id = 'banner-id';
    element.src = banner_img;
    element.onclick = function () {window.open(redirect_link)};
    document.getElementById(element_id).appendChild(element);
    displayedBanners.push({img: banner_img, link:redirect_link, id:element_id});

}

const displayAllStorageBanners = () => {
    const bannersStorage = window.localStorage.getItem('banners-data');
    if(!bannersStorage || bannersStorage.length === 0) return null;
    const banners = JSON.parse(bannersStorage);
    banners.map((banner) => {
        createNewBanner(banner.id, banner.link, banner.img);
    });
}

const ClearLocalStorage = () => {
    window.localStorage.setItem('banners-data' , null);
}
