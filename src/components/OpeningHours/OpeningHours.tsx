import { useState } from "react";
import "./OpeningHours.scss";
import { WorldTimeApiResponse } from "../../types";
import Modal from "../Modal/Modal";
import { toZonedTime } from "date-fns-tz";
import Button from "../Buttons/Button/Button";

/**
 * OpeningHours component displays the opening hours of the office.
 * Compares the current time in Riga with the office hours to determine if the office is open or closed.
 * Depending on the result, a modal is displayed with a message.
 * The user can check if the office is open by clicking a button.
 */

export const OpeningHours = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const fetchString = "https://worldtimeapi.org/api/timezone/Europe/Riga";
  const OFFICE_OPEN_HOUR = 8;
  const OFFICE_CLOSE_HOUR = 17;
  const OFFICE_OPEN_DAY = 1; // Monday
  const OFFICE_CLOSE_DAY = 5; // Friday

  const fetchOfficeHours = async (): Promise<WorldTimeApiResponse> => {
    const response = await fetch(fetchString);

    if (!response.ok) {
      throw new Error("Failed to fetch time.");
    }

    return response.json();
  };

  const isOfficeOpen = (currentRigaTime: Date): boolean => {
    // Get the current hour and day, to compare with the office hours
    const currentHour = currentRigaTime.getHours();
    const currentDay = currentRigaTime.getDay();

    return (
      currentHour >= OFFICE_OPEN_HOUR &&
      currentHour < OFFICE_CLOSE_HOUR &&
      OFFICE_OPEN_DAY <= currentDay &&
      currentDay <= OFFICE_CLOSE_DAY
    );
  };

  const checkOfficeHours = async () => {
    try {
      const data = await fetchOfficeHours();
      // Fetch the current time in Riga and store as a WorldTimeApiResponse object
      // Utilize this package to ensure the time is correct, and always as Riga's time
      const currentRigaTime = toZonedTime(data.datetime, data.timezone);

      setModalMessage(
        isOfficeOpen(currentRigaTime)
          ? "Kontoret är öppet! Kom gärna förbi.🎉"
          : "Kontoret är stängt. Välkommen åter imorgon!"
      );
    } catch (error) {
      console.error("Error fetching time:", error);
      setModalMessage(
        "Något gick fel när vi skulle hämta tiden. Försök igen senare."
      );
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <section>
      <div className="container center open__hours__container">
        <h3 className="center">Våra öppettider!</h3>
        <div>
          <div className="opening__hours">
            <h4>Måndag-Fredag</h4>
            <p>08:00 - 17:00</p>
          </div>
          <div className="opening__hours">
            <h4>Lördag - Söndag</h4>
            <p>Stängt</p>
          </div>
        </div>
        <Button
          btnText="Klicka här för att se om vi har öppet"
          secondary
          onClick={checkOfficeHours}
        />
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <p>{modalMessage}</p>
          </Modal>
        )}
      </div>
    </section>
  );
};
