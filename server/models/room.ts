import { model, Model, Schema, Document } from 'mongoose';

interface IRoom extends Document {
  name: string;
  admin: string;
  recipients: string;
  messages: string[];
}

const roomSchema: Schema = new Schema({
  name: { type: String, required: true },
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

const Room: Model<IRoom> = model('Room', roomSchema);

export default Room;
