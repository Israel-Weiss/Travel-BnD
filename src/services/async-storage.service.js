
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
    _save,
    getLogedInUser,
    getStays,
    getUsers,
    getWishList,
    getOrders,
    save,
    getFilterFromStorage
}

function getWishList() {
    var entities = JSON.parse(localStorage.getItem("wishList"))
    return entities
}

function getStays() {
    var entities = JSON.parse(localStorage.getItem("stays"))
    return entities
}

function getUsers(){
    var entities = JSON.parse(localStorage.getItem("users"))
    return entities
}

function getOrders(){
    var entities = JSON.parse(localStorage.getItem("orders"))
    return entities
}


function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         // reject('OOOOPs')
    //         resolve(entities)
    //     }, delay)
    // })
    return Promise.resolve(entities)
}


function getLogedInUser() {
    return JSON.parse(sessionStorage.getItem("loggedinUser"))
}

function getFilterFromStorage() {
    return JSON.parse(sessionStorage.getItem("filterBy"))
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity, type = null) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            if (type === 'order') return entities
            else return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            if(entityType==="orders")return entities
            else return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function save(entityType, entities) {
    sessionStorage.setItem(entityType, JSON.stringify(entities))
}




function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}