import { model, Model, Schema, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface IRoom extends Document {
  name: string;
  admin: string;
  recipients: string;
  messages: string[];
}

const roomSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  admin: { type: String, required: true },
  recipients: { type: [{ type: String }], required: true },
  messages: {
    type: [
      {
        sender: String,
        text: String,
      },
    ],
    default: [],
  },
});

roomSchema.plugin(uniqueValidator);

const Room: Model<IRoom> = model('Room', roomSchema);

export default Room;
