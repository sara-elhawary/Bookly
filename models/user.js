const { Schema, model, default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    address:{
        type:String
    }

})

UserSchema.pre('save', async function (req, res) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
})

UserSchema.methods.comparePasswords = async function (password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
}


exports.User = mongoose.model('User', UserSchema);