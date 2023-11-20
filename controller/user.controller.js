

export const getUser = (req, res) => {
    const {q, token, username} = req.query;
    res.json({
        q,
        token,
        username
    })
}

export const postUser = (req, res) => {
    res.json({
        msg: 'post API - Controller'
    })
}

export const deleteUser = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    })
}

export const putUser = (req, res) => {
    res.json({
        msg: 'put API - Controller'
    })
}

export const patchUser = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    })
}