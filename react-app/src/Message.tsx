
function Message() {
    const state = true

    const name = state ? 'Isaiah' : 'World'
    return <h1>Hello {name}</h1>
}

export default Message;