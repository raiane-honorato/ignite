import { useContext, useEffect } from "react";
import { fromLatLng, setKey } from "react-geocode";
import { CartContext } from "../../contexts/cart/CartContext";
import { Address } from "../../domains/Cart";

export function useGetUserLocation() {
  const {
    cartState: { address },
    setCartAddress,
  } = useContext(CartContext);

  function getUserLocation() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      if (isLocationSetInAddress(address, latitude, longitude)) {
        return;
      }

      const { city, state } = await getAddressFroomLatLng(latitude, longitude);

      setCartAddress({
        street: "",
        number: "",
        additionalInfo: "",
        postalCode: "",
        city,
        state,
        latitude,
        longitude,
      });
    });
  }

  useEffect(() => {
    getUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

const getAddressFroomLatLng = async (
  latitude: number,
  longitude: number
): Promise<{ city: string; state: string }> => {
  setKey(import.meta.env.VITE_GOOGLE_API_KEY);

  const result = await fromLatLng(latitude, longitude);

  const addressComponents = result.results[0].address_components;

  const city = addressComponents.find((component: any) =>
    component.types.includes("administrative_area_level_2")
  )?.long_name;

  const state = addressComponents.find((component: any) =>
    component.types.includes("administrative_area_level_1")
  )?.long_name;

  return { city, state };
};

const isLocationSetInAddress = (
  address: Address | undefined,
  latitude: number,
  longitude: number
): boolean => {
  return (
    address?.latitude?.toFixed(2) === latitude.toFixed(2) &&
    address?.longitude?.toFixed(2) === longitude.toFixed(2)
  );
};
