export interface Note {
    _id: string;
    title: string;
    description?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export type CreateNote = Omit<Note, "_id" | "createdAt" | "updatedAt">;

export type UpdateNote = Partial<CreateNote>;