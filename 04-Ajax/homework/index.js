// * Ocultamos la imagen
let imagen = $('img')
imagen.hide()

// ? Ver lista de amigos
const lista = $('#lista')
const boton = $('#boton')
const URL = 'http://localhost:5000/amigos'

const listFriends = (info)=>{
    // console.log(info);
    for (const item of info) {
        lista.append(`<li>${item.id} - ${item.name}</li>`)
    }
    imagen.hide()
}

const getFriends = ()=> {
    imagen.show();
    lista.empty()
    $.get(URL, listFriends )
}

boton.click(getFriends)

// ? Buscar amiguitos
const search = $('#search')
const inputFriend = $('#input')
const amigo = $('#amigo')

const btnDelete = $('#delete')
const inputDelete = $('#inputDelete')
const successFriend = $('#success')

// * Limpiar inputs
const cleanInputs = () => {
    inputFriend.val('')
    inputDelete.val('')
}

const nameFriend = (info)=>{
    // console.log(info);
    amigo.text(info.name)
    cleanInputs()
}

const notFoundFriend = ()=> {
    amigo.text(`El amigo con el id ${inputFriend.val()} no existe`)
    cleanInputs()
}

const validateId = (id, input) => {
    if(input === inputFriend && !id) return amigo.text('No has escrito ningún ID')
    if(input === inputDelete && !id) return successFriend.text('No has escrito ningún ID')
}

const showFriendName = ()=>{
    let id = inputFriend.val() // getElementById('input').value
//    console.log(id);
validateId(id, inputFriend)
$.get(`${URL}/${id}`, nameFriend).fail(notFoundFriend)
}

search.click(showFriendName)

// ? Eliminar amiguitos

const deleteFriend = ()=>{
    const idDelete = inputDelete.val()
    validateId(idDelete)
    $.ajax({
        url:`${URL}/${idDelete}`,
        type:"DELETE",
        success:()=>{
            successFriend.text(`El amigo número ${idDelete} ha sido borrado exitosamente`)
            getFriends()
            cleanInputs()
        }
    })
}
btnDelete.click(deleteFriend)