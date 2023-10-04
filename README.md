# LF07Frontend (Kilian S. / Hakon T. / Burhan K.)

## Frontend starten mit XAMPP

1.  Git Clone
2.  Ordner mit XAMPP öffnen
    * Im htdocs Ordner ablegen oder custom Pfad bei XAMPP einstellen
    * [http://localhost/lf07frontend](http://localhost/lf07frontend) im Browser öffnen
4.  Die App legt keine eigene Datebank an und erwartet, dass eine auf dem Server bereits vorhanden ist
    * Datenbank `smart_garden` anlegen
    * User `arduino` mit passwort `password123` anlegen (oder im SourceCode) ändern
    * Tables `temperature` & `humidity` & `waterLevel` & `luminosity` mit Rows `value: int` & `datetime: datetime` anlegen
5. In der Project-Directory eine `measurements.txt` ablegen
    * Hier werden Die Daten vom Arduino hingeschrieben
    * Daten können zum testen auch per Hand entweder in dieser Datei oder direkt in der Datenbank eingetragen werden

### Mit Arduino benutzen:
https://github.com/Devclaim/lf07arduino

Der Arduino- Code geht von einem Arduino ohne Ethernet-Shield aus.
Man braucht also ein Programm wie CoolTerm um die geschriebenen Daten aus dem Serial.Monitor abzufangen und in die `measurements.txt` zu schreiben.
