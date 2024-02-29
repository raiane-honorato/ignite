import { fromLatLng, setKey } from "react-geocode";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function getUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      setKey(import.meta.env.VITE_GOOGLE_API_KEY);

      fromLatLng(latitude, longitude)
        .then(({ results }) => {
          console.log("results", results);
        })
        .catch(console.error);
    });
  }

  getUserLocation();

  return (
    <header>
      <h1>
        <button aria-labelledby="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Coffee Delivery" id="logo" />
        </button>
      </h1>
    </header>
  );
}
