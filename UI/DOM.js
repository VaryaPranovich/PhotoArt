let modulSecond = (function () {
    let lenta = document.querySelector('.thumb');
    let nickname = document.querySelector('.UserDecriprtionClass');
    let add_Post = document.querySelector('.add-post');
    let logo = document.querySelector('.logo');
    let user = 'Guest';

    let activetedUser = function (newUser) {
        if (typeof newUser !== 'Guest' ) {
            user = newUser;
            nickname.innerHTML = user;
            logo.style.display='initial';
        }
        if(newUser === 'Guest') {
            user='Guest';
            nickname.innerHTML = user;
            logo.style.display='none';
        }
    }

    let createPhotoPost = function (photoPost) {
        let post = document.createElement('div');
        post.id = photoPost.id;
        post.className = 'post';
        let photo = document.createElement('img');
        photo.src = 'wQB-mrma10k.jpg';
        photo.width = "500";
        photo.height = "480";
        let like = document.createElement('div');
        like.className = 'like';
        let like_photo = document.createElement('img');
        like_photo.src = 'heart-2055203_960_720.png';
        like_photo.width = "30";
        like_photo.height = "30";
        let textComment = document.createElement('pre');
        textComment.className ='textComment';
        textComment.innerText = '67 Mood';
        post.appendChild(photo);
        like.append(like_photo);
        post.appendChild(like);
        post.appendChild(textComment);
        return post;
    }

    let addPost = function (photoPost) {
        if (modulFirst.addPhotoPost(photoPost)) {
            let ind = photoPosts.findIndex((el)=>{return el.id===photoPost.id})
            lenta.insertBefore(createPhotoPost(photoPost), lenta.children[ind]);
            return true;
        }
        return false;
    }

    let removePost = function (id) {
        if (modulFirst.removePhotoPost(id)) {
            lenta.removeChild(document.getElementById(id));
            return true;
        }
        return false;
    }
    let clearLenta = function () {
        lenta.innerHTML = "";
    }
    let showMore = function (skip, top, filterConfig) {
        modulSecond.clearLenta();
        let load_more = document.createElement('button');
        load_more.className ='LoadButton';
        load_more.innerHTML='Load more';
        let arr = modulFirst.getPhotoPosts(skip, top, filterConfig);
        let ind =0;
        arr.forEach(element => {
            ind = photoPosts.findIndex((el)=>{return el.id===element.id})
        lenta.insertBefore(createPhotoPost(element), lenta.children[ind]);
    });
        lenta.appendChild(load_more);
    }

    let editPhotoPost = function (id, photoPost) {
        if (modulFirst.editPhotoPost(id, photoPost)) {
            lenta.replaceChild(createPhotoPost(modulFirst.getPhotoPost(id)), document.getElementById(id));
            return true;
        }
        return false;
    }

    return {
        activetedUser,
        createPhotoPost,
        addPost,
        showMore,
        removePost,
        editPhotoPost,
        clearLenta
    }

})();
modulSecond.activetedUser('Varvara');
modulSecond.addPost({
    id: '1',
    description: 'Town',
    createdAt: new Date(),
    author: 'Varya',
    photoLink: 'AEB2sCWYZ0w.jpg',
    likes: ['Alex', 'Arina']
});
modulSecond.addPost({
    id: '2',
    description: 'Town',
    createdAt: new Date(),
    author: 'Varya',
    photoLink: 'AEB2sCWYZ0w.jpg',
    likes: ['Alex', 'Arina']
});
modulSecond.showMore(0,10,{});
//modulSecond.removePost('3');
//modulSecond.editPhotoPost('1',{ description: 'hello'});
