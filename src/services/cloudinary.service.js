export const cloudinaryService = {
    uploadImg
}

async function uploadImg(ev) {
    // Defining our variables
    const CLOUD_NAME = 'dv2tdbhtp' // Insert yours
    const UPLOAD_PRESET = 'gqesxnbi' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    // Sending a post method request to Cloudniarys' API
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: FORM_DATA
        })
        const elImg = document.createElement('img');
        const { url } = await res.json()
        document.body.append(elImg);
        elImg.src = url;
        return (console.log(url))
    } catch (err) {
        console.error('ERROR!', err)
    }
}