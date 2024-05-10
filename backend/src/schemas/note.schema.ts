import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type TaskDocument = HydratedDocument<Note>;

@Schema({
  timestamps: true,
})
export class Note {
  @Prop({ unique: true, trim: true, required: true })
  title: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ default: false })
  active: boolean;
}

export const NoteSchema = SchemaFactory.createForClass(Note);