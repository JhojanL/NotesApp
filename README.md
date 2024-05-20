# NotesApp

NotesApp is a full-stack application that allows users to create, edit, delete, archive, and list notes.

## Features

- **Create, Edit, and Delete Notes**: Users can easily manage their notes.
- **Archive/Unarchive Notes**: Users can move notes to and from an archive.
- **List Active Notes**: Users can view all their active notes in one place.
- **List Archived Notes**: Users can view all their archived notes separately.

## Backend Development

The backend of this application is built with NestJS and Mongoose.

To start the backend server, navigate to the `backend` directory and run `npm run start:dev`.

The backend server provides a RESTful API for the frontend to interact with. It handles requests for creating, reading, updating, and deleting notes, as well as archiving and unarchiving notes.

## Frontend Development

The frontend of this application is built with React, TypeScript, Vite, and Tailwind CSS.

To start the frontend server, navigate to the `frontend` directory and run `npm run dev`.

The frontend interacts with the backend through its RESTful API. It provides a user interface for creating, editing, deleting, archiving, and listing notes.

### Images
![image](https://drive.google.com/uc?id=1F-fxYEOBsTEKIcsrkReKOcEXC4FMJQAd)

## Prerequisites

The following tools are required to run this app:

- Node.js (v20.12.2 or later)
- npm (v10.7.0 or later)
- MongoDB (v7.0.9 or later)

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/JhojanL/NotesApp.git
    ```
2. Navigate to the project directory:
    ```bash
    cd NotesApp
    ```
3. Install the dependencies and run the app: For Unix-like systems (Linux, macOS), or Windows with Git Bash:
    ```bash
    chmod +x start.sh && ./start.sh
    ```
