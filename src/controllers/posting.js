"use strict"

class PostingController {
    constructor(collection) {
        this.collection = collection;
    }

    get(request, response) {
        console.log('here')
        response.send('HI')
    }
}

module.exports = PostingController;
