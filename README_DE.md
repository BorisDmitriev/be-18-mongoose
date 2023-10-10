# BE-Mongoose-Create-Data

## Aufgabe

In dieser Übungsaufgabe wirst du lernen, wie du mit Mongoose - einer ODM (Object Data Modeling) Bibliothek für MongoDB - interagieren kannst. Du wirst ein einfaches Datenbankmodell erstellen, Daten in der Datenbank speichern und mit Hilfe von Mongoose-Funktionen auf die Daten zugreifen.

## Was du machen wirst

Du wirst ein einfaches Notizbuch-Modell erstellen, in dem Notizen gespeichert und abgerufen werden können. Die Notizen werden aus einem Titel und einem Text bestehen.

## Aufgaben

### Task 1: Mongoose-Schema erstellen

Erstelle ein Mongoose-Schema für das Notizbuch-Modell. Das Schema sollte die folgenden Felder enthalten:

-   `title` - Der Titel der Notiz (Typ: String)
-   `text` - Der Text der Notiz (Typ: String)

### Task 2: Modell erstellen

Exportiere ein Mongoose-Modell für das Notizbuch-Modell. Verwende dazu das zuvor erstellte Schema und nenne das Modell "Note".

### Task 3: Daten in der Datenbank speichern

Erstelle ein Seed-Skript, das mehrere Notizen mit unterschiedlichen Titeln und Texten in die Datenbank speichert. Verwende dazu das erstellte "Note"-Modell und die Mongoose-Funktion `create`.

### Task 4: Daten aus der Datenbank abrufen

Nutze die MongoDB-Shell oder den MongoDB-Compass um zu überprüfen ob deine Daten erfolgreich in die Datenbank geschrieben worden sind.
