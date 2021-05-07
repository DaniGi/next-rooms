import { model, Model, Schema, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export interface IUser extends Document {
  username: string;
  online: boolean;
  friends: string[];
  rooms: string[];
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  online: { type: Boolean, default: false },
  friends: [{ type: String, default: [''] }],
  rooms: [{ type: String, default: [''] }],
});

userSchema.plugin(uniqueValidator);

const User: Model<IUser> = model('User', userSchema);

export default User;
