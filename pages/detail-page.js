function submitComment() {
    

    const inputField = document.getElementById('name')
    const name = inputField.value 
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    const comment = document.createElement('section')
    const h3 = document.createElement('h3') 
    const p = document.createElement('p')

    function doesNotPassAllValidations(name, msg) {
        //*check for falsy values
        if (!name || ! comment) {
            alert('You forgot to fill in your name or message!')
            return true
        }
        console.log(msg.length)
        //* check length of msg
        if (msg.length > 280) {
            alert('Comment is too long.')
            return true
        }
        return false
    }
    if (doesNotPassAllValidations (name, msg)) {
        return null;
    }

    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    
    
}
