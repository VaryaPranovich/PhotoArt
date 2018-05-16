(function(){
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    var photoPosts = [
        {
            id: '1',
            description: 'Искусство',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'r3xsQCnfCsw.jpg',
            likes: ['Alex', 'taxi', 'Varya']
        },
        {
            id: '2',
            description: 'Город',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'AEB2sCWYZ0w.jpg',
            likes: ['Alex', 'Arina']

        },
        {
            id: '3',
            description: 'Море',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'bjuagw3klA0.jpg',
            likes: ['Mike']

        },
        {
            id: '4',
            description: 'Облака',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'wQB-mrma10k.jpg',
            likes: ['Mike', 'taxi', 'Varya', 'pipi']

        },
        {
            id: '5',
            description: 'Вокзал',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'dCndhz-Z3Kc.jpg',
            likes: ['Alex', 'taxi', 'Varya', 'remember']
        },
        {
            id: '6',
            description: 'Сердце города',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: '44_a1nojpWM.jpg',
            hashtags: ['город'],
            likes: ['Arina']

        },
        {
            id: '7',
            description: 'Закат',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'Ywpky192Hmk.jpg',
            hashtags: ['вечер'],
            likes: ['Mike', 'Ingrid']
        },
        {
            id: '8',
            description: 'Вечер',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'M5pa9KK5VOo.jpg',
            hashtags: ['красота'],
            likes: ['Ingrid']
        },
        {
            id: '9',
            description: 'Пальмы',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: '0q-hvjqVAls.jpg',
            hashtags: ['пляж', 'ночь','неон'],
            likes: ['tachki', 'chai', 'ss']
        },
        {
            id: '10',
            description: 'Дом',
            createdAt: new Date(),
            author: 'Varya',
            photoLink: 'R-AJ1QlSSSU.jpg',
            hashtags: ['home'],
            likes: ['cars', 'taxi']
        },
    ]

    var Filter = {
        author: 0,
        hashtags: ['mama', 'papa'],
        data: 0
    };

    function getPhotoPosts(skip, top, filterConfig){
        photoPosts.sort(compareDates);
        var authTemp = filterConfig.author || 0;
        var dataTemp = filterConfig.data || 0;
        var hashTemp = filterConfig.hashtags || 0;
        var newPosts = photoPosts.slice(skip, top + skip);

        if(authTemp == 0){
            if(dataTemp == 0){
                if(hashTemp == 0){
                    return newPosts
                } else {
                    return newPosts.filter(function(photoPost) {
                        for (i = 0; i < filterConfig.hashtags.length; i++) {
                            if((newPosts.hashtags.some(function(tag){
                                    return tag == filterConfig.hashtags[i]})) == false) {
                                return false;
                            }
                        }
                        return true;
                    });
                }
            } else {
                if (hashTemp == 0) {
                    return newPosts.filter(function (photoPost) {
                        return photoPost.data == filterConfig.data
                    });
                } else {
                    return newPosts.filter(function (photoPost) {
                        if(photoPost.data == filterConfig.data) {
                            for (i = 0; i < filterConfig.hashtags.length; i++) {
                                if ((photoPost.hashtags.some(function (tag) {
                                        return tag == filterConfig.hashtags[i]
                                    })) == false) {
                                    return false;
                                }
                            }
                            return true;
                        } else
                            return false;
                    });
                }
            }
        } else {
            if(dataTemp == 0){
                if(hashTemp == 0) {
                    return newPosts.filter(function (photoPost) {
                        return photoPost.author == filterConfig.author;
                    });
                } else {
                    return newPosts.filter(function (photoPost) {
                        if(photoPost.author == filterConfig.author) {
                            for (i = 0; i < filterConfig.hashtags.length; i++) {
                                if ((photoPost.hashtags.some(function (tag) {
                                        return tag == filterConfig.hashtags[i]
                                    })) == false) {
                                    return false;
                                }
                            }
                            return true;
                        } else {
                            return false;
                        }
                    });
                }
            } else {
                if(hashTemp == 0) {
                    return newPosts.filter(function (photoPost) {
                        return photoPost.author == filterConfig.author && photoPost.data == filterConfig.data ;
                    });
                } else {
                    return newPosts.filter(function (photoPost) {
                        if(photoPost.author == filterConfig.author && photoPost.data == filterConfig.data){
                            for (i = 0; i < filterConfig.hashtags.length; i++) {
                                if ((photoPost.hashtags.some(function (tag) {
                                        return tag == filterConfig.hashtags[i]
                                    })) == false) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
            }
        }
    }

    function getPhotoPost(id){
        for(i = 0; i < photoPosts.length; i++){
            if(id == photoPosts[i].id){
                return photoPosts[i];
            }
        }
    }

    function validatePhotoPost(post){
        tempID = post.id || 0;
        if(tempID != 0) {
            if (photoPosts.some(function (elem) {
                    return post.id == elem.id
                }) == false) {
                tempDescription = post.description || 0;
                if (tempDescription != 0 && (tempDescription.length > 200 || tempDescription < 0)) {
                    return false;
                }
                tempCreatedAt = post.createdAt || 0;
                tempAuthor = post.author || 0;
                tempPhotoLink = post.photoLink || 0;
                if ((tempID && tempDescription && tempCreatedAt && tempAuthor && tempPhotoLink) == 0)
                    return false;
                else
                    return true;
            }
            return false;
        }
        return false;
    }

    function addPhotoPost(post){
        if(validatePhotoPost(post) == true) {
            photoPosts.push(post);
            return true;
        } else {
            return false;
        }
    }

    function removePhotoPost(id){
        if(photoPosts.some(function(post){return post.id == id})) {
            for (i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id == id) {
                    photoPosts.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }


    function editPost(id, post){
        if(photoPosts.some(function(post){return post.id == id})) {
            tempDescr = post.description || 0;
            tempPhoto = post.photoLink || 0;
            tempTags = post.hashtags || 0;

            if (tempDescr != 0 && tempDescr.length > 200) {
                return false;
            }

            for(i = 0; i < photoPosts.length; i++){
                if(photoPosts[i].id == id){
                    if(tempDescr != 0){
                        photoPosts[i].description = tempDescr;
                    }
                    if(tempPhoto != 0){
                        photoPosts[i].photoLink = tempPhoto;
                    }
                    if(tempTags != 0){
                        for(j = 0; j < post.hashtags.length; j++) {
                            photoPosts[i].hashtags[j] = post.hashtags[j];
                        }
                    }
                    break;
                }
            }
        } else {
            return false;
        }
    }

    var filerFound = {
        author: 'Varya',
        hashtags: ['картошка', 'супчик'],
    }

    var pp = getPhotoPost(20);
    console.log(pp);
    validatePhotoPost(filerFound);
    var OnePost = {
        id: '22',
        description: '1',
        createdAt: new Date(),
        author: '1',
        photoLink: '2',
        hashtags: ['3'],
        likes: ['4', '5', '6']
    }
    editPost(10, OnePost);
})();
