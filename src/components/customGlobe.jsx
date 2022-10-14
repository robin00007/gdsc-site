import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { COUNTRIES_DATA } from "../assets/data/countries_data.js";
import HEX_DATA from "../assets/data/countries_hex_data.json.json";
import Globe from "react-globe.gl";

const getRandomCountry = () => {
  return COUNTRIES_DATA[Math.floor(Math.random() * COUNTRIES_DATA.length)];
};

export default function CustomGlobe() {
  const globeEl = useRef();
  const country = getRandomCountry();
  const [selectedCountry, setSelectedCountry] = useState({
    lat: country.latitude,
    lng: country.longitude,
    label: country.name,
  });
  const [hex, setHex] = useState({ features: [] });

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      (async () => {
        const country = getRandomCountry();
        setSelectedCountry({
          lat: country.latitude,
          lng: country.longitude,
          label: country.name,
        });
      })();
    }, 3000); //Every 3 seconds
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    // globeEl.current.controls().autoRotate = true;
    // globeEl.current.controls().autoRotateSpeed = 0.2;

    const MAP_CENTER = { lat: 0, lng: 0, altitude: 1.5 };
    globeEl.current.pointOfView(MAP_CENTER, 0);
  }, [globeEl]);

  useEffect(() => {
    const countryLocation = {
      lat: selectedCountry.lat,
      lng: selectedCountry.lng,
      altitude: 1.5,
    };

    globeEl.current.pointOfView(countryLocation, 0);
  }, [selectedCountry]);

  return (
    <Globe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
      ref={globeEl}
      height="1000"
      width="1000"
      // globeImageUrl={"https://wallpapercave.com/wp/wp7573471.png"}
      backgroundColor="rgba(255, 0, 0, 0)"
      waitForGlobeReady
      // showGlobe={true}
      labelsData={[selectedCountry]}
      labelText={"label"}
      labelSize={1.6}
      labelColor={useCallback(() => "red", [])}
      labelDotRadius={0.2}
      labelAltitude={0.05}
      hexPolygonsData={hex.features}
      hexPolygonResolution={3} //values higher than 3 makes it buggy
      hexPolygonMargin={0.62}
      hexPolygonColor={useCallback(() => "#ffffff", [])}
    />
  );
}
