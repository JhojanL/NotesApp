import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from 'src/schemas/note.schema';
import { Model } from 'mongoose';
import { CreateNoteDto } from 'src/dto/create-note.dto';
import { UpdateNoteDto } from 'src/dto/update-note.dto';

@Injectable()
export class NotesService {
constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async create(createNoteDto: CreateNoteDto) {
    const createdNote = new this.noteModel(createNoteDto);
    return createdNote.save();
  }

  async findAll() {
    return this.noteModel.find();
  }

  async findOne(id: string) {
    return this.noteModel.findById(id);
  }

  async delete(id: string) {
    return this.noteModel.findByIdAndDelete(id);
  }

  async update(id: string, note: UpdateNoteDto) {
    return this.noteModel.findByIdAndUpdate(id, note, {new:true});
  }
}
