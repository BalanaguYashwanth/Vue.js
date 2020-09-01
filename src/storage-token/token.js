const token = 'user-token'

const Tokenservice={
    getToken(){
        return localStorage.getItem(token)
    }
}

export {Tokenservice}

