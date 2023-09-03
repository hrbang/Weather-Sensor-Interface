#!/usr/bin/env python

# Import af used biblioteker
from sense_hat import SenseHat
import time
import RPi.GPIO as GPIO
import datetime
import pymysql

# General indstillinger for vores Script
prog_name = ""
device = ''

# Indstillinger for vores Database connection
hostname = ''
port = ""
username = ''
password = ''
database = ''

# Init af vores SenseHat()
sense = SenseHat()

# Funktion til at indsætte en record ind i vores PhpMyAdmin Database
def insert_record(device, datetime, temp, hum, pressure):

    # Her definerer vi den sql query der indsætter vores data fra Pi'en
    query = "INSERT INTO data (device,datetime,temperature,humidity,pressure) " \
            "VALUES (%s,%s,%s,%s,%s)"
    args = (device, datetime, temp, hum, pressure)

    # Her laver vi en exception handling for at sikre at vores connection ikke crasher og fejler
    try:
        conn = pymysql.connect(host=hostname, port=port, user=username, passwd=password, db=database)
        cursor = conn.cursor()
        cursor.execute(query, args)
        conn.commit()

    except Exception as error:
        print(error)

    finally:
        cursor.close()
        conn.close()


# Her printer vi en lille "Start besked" der indikerer hvilket tidspunkt vores script blev startet
print('[{0:s}] starting on {1:s}...'.format(
    prog_name, datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S')))

# Dette loop er vores main loop, som kører i baggrunden og indsamler data fra vores SenseHat
while True:
        temp = sense.get_temperature()
        hum = sense.get_humidity()
        pressure = sense.get_pressure()
        now = datetime.datetime.now()
        date = now.strftime('%Y-%m-%d %H:%M:%S')
        insert_record(device, str(date), format(temp, '.2f'), format(hum, '.2f'), format(pressure, '.2f'))
        time.sleep(10)
