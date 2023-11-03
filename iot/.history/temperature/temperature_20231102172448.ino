#include <DallasTemperature.h>

#include <OneWire.h>

#define ONE_WIRE_BUS 8

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

float offsetCorrection = 4.5;

void setup()
{
    Serial.begin(9600);
    sensors.begin();
    sensors.setResolution(12);
}
void loop()
{
    sensors.requestTemperatures();
    delay(750);

    float temperatureC = sensors.getTempCByIndex(0) + offsetCorrection;
    Serial.print("Temperature is: ");
    Serial.println(temperatureC, 2);
    delay(1000);
}
