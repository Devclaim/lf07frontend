<?php
    class MeasurementController {
        private $conn;
        private $file;        

        public function __construct() {
            $this->conn = new mysqli("localhost", "arduino", "password123", "smart_garden");
            $this->file = __DIR__ . '/measurements.txt';

            if ($this->conn->connect_error) {
                die("Connection failed: " . $this->conn->connect_error);
            }
        }

        public function writeMeasurements() {
            $fileHandle = fopen($this->file, "r+");

            while (!feof($fileHandle)) {
                $line = fgets($fileHandle);
                $datetime = date('Y-m-d H:i:s');

                if(!$line) {break;}

                $values = preg_split("/\,/", $line);
                $temperature = (int)$values[0];
                $humidity = (int)$values[1];
                $waterLevel = (int)$values[2];
                $luminosity = (int)$values[3];
                

                $sql = "INSERT INTO temperature (value, datetime) VALUES ('$temperature','$datetime')";
                $this->conn->query($sql);
                $sql = "INSERT INTO humidity (value, datetime) VALUES ('$humidity','$datetime')";
                $this->conn->query($sql);
                $sql = "INSERT INTO waterLevel (value, datetime) VALUES ('$waterLevel','$datetime')";
                $this->conn->query($sql);
                $sql = "INSERT INTO luminosity (value, datetime) VALUES ('$luminosity','$datetime')";
                $this->conn->query($sql);
            }

            // After measurements are read delete file content
            ftruncate($fileHandle, 0);
            fclose($fileHandle);
        }

        public function getTemperature() {
            $sql = "SELECT * FROM temperature ORDER BY datetime DESC LIMIT 1";
            $result = $this->conn->query($sql);

            $json = json_encode($result->fetch_assoc());
            echo $json;
        }

        public function getHumidity() {
            $sql = "SELECT * FROM humidity";
            $result = $this->conn->query($sql);

            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }

            $json = json_encode($data);

            header('Content-Type: application/json');
            echo $json;
        }

        public function getWaterLevel() {
            $sql = "SELECT * FROM waterLevel";
            $result = $this->conn->query($sql);

            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }

            $json = json_encode($data);

            header('Content-Type: application/json');
            echo $json;
        }

        public function getLuminosity() {
            $sql = "SELECT * FROM luminosity";
            $result = $this->conn->query($sql);

            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }

            $json = json_encode($data);

            header('Content-Type: application/json');
            echo $json;
        }
    }
?>