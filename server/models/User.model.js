const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
    like: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
    //By using enum, user can have only two types of role.
    role: {
      type: String,
      enum: ['admin', 'users'],
      default: 'users',
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;
