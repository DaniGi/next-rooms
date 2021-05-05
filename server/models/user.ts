import { model, Model, Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  online: { type: Boolean; default: true };
  friends: string[];
  rooms: string[];
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  friends: { type: [{ type: String }], default: [] },
  rooms: { type: [{ type: String }], default: [] },
});

const User: Model<IUser> = model('User', userSchema);

export default User;
