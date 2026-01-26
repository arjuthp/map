function User(email,password){
    this._email = email;
    this._pasword = password
}

Object.defineProperty(this, 'email',{
    get:function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }
})