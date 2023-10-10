
const mongoose = require("mongoose");
const Note = require("./notes.schema");

// Verbindung zur Datenbank herstellen
mongoose.connect("mongodb://localhost:27017/notesDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Datenbankverbindung hergestellt");

        const notes = [
            {
                title: "Titel1",
                text: "Aufgabe1"
            },
            {
                title: "Titel2",
                text: "Aufgabe2"
            },
            {
                title: "Titel3",
                text: "Aufgabe3"
            },
        ];
        
        return Note.create(notes).then(() => {
            console.log("Notes erfolgreich gespeichert");
        });
    })
    .catch((error) => {
        console.error("Fehler beim Seeden der Datenbank:", error);
    })
    .finally(() => {
        mongoose.disconnect();
    });
