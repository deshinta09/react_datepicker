export default function Facilites() {
  return (
    <div className="bg-[#121818] py-10 text-[#D2AD83] px-8 rounded-b-xl">
      {/* title */}
      <h1 className="pb-5">
        <span className="font-bold text-3xl">Facilities Vanue </span>
        <span className="text-3xl">Simpang Lima Semarang</span>
      </h1>
      {/* title end */}
      <div className="flex gap-5">
        <div className="grid gap-3">
          {/* SERVICES & PRACTICAL INFORMATION */}
          <div>
            <h1 className="text-base font-semibold">
              SERVICES & PRACTICAL INFORMATION
            </h1>
            <div className="p-2 text-xs">
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/services/parking.png"
                  alt="img-parking"
                />
                <h1>Parking</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/services/air_conditioned.png"
                  alt="img-air_conditioned"
                />
                <h1>Air Conditioned</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Images/icon/services/porter.png" alt="img-porter" />
                <h1>Porter</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Images/icon/services/wifi.png" alt="img-wifi" />
                <h1>WIFI / Internet Access</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/services/receptionist.png"
                  alt="receptionist"
                />
                <h1>Receptionist Open 24 hours a day</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Images/icon/services/cleaning.png" alt="cleaning" />
                <h1>Dry Cleaning iroing</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Images/icon/services/ev.png" alt="ev" />
                <h1>EV Charging Station</h1>
              </div>
            </div>
          </div>
          {/* SERVICES & PRACTICAL INFORMATION END */}

          {/* LEINSURE & ACTIVITIES */}
          <div>
            <h1 className="text-base font-semibold">LEINSURE & ACTIVITIES</h1>
            <div className="p-2 text-xs">
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/activities/swimming.png"
                  alt="img-swimming"
                />
                <h1>Swimming Pool</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Images/icon/activities/spa.png" alt="img-spa" />
                <h1>SPA & Wellness</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Images/icon/activities/gym.png" alt="img-gym" />
                <h1>Mini Gym</h1>
              </div>
            </div>
          </div>
          {/* LEINSURE & ACTIVITIES END */}
        </div>

        <div className="grid gap-3">
          {/* CATERING */}
          <div>
            <h1 className="text-base font-semibold">CATERING</h1>
            <div className="p-2 text-xs">
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/catering/breakfast.png"
                  alt="img-parking"
                />
                <h1>Breakfast</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/catering/bar.png"
                  alt="img-air_conditioned"
                />
                <h1>Bar</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Images/icon/catering/dining.png" alt="img-porter" />
                <h1>All-Day Dining</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/catering/room_service.png"
                  alt="img-wifi"
                />
                <h1>Room Service</h1>
              </div>
            </div>
          </div>
          {/* CATERING END */}

          {/* BUSINESS SERVICE */}
          <div>
            <h1 className="text-base font-semibold">BUSINESS SERVICE</h1>
            <div className="p-2 text-xs">
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/business/mini_ballroom.png"
                  alt="mini_ballroom"
                />
                <h1>Mimi BallRoom</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/business/meeting_room.png"
                  alt="img-meeting-room"
                />
                <h1>Meeting Room</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/business/connectivity.png"
                  alt="img-connectivity"
                />
                <h1>Connectivity Room</h1>
              </div>
            </div>
          </div>
          {/* BUSINESS SERVICE END */}

          {/* TRANSPORTATION */}
          <div>
            <h1 className="text-base font-semibold">TRANSPORTATION</h1>
            <div className="p-2 text-xs">
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/transportation/airport.png"
                  alt="airport"
                />
                <h1>
                  15 Minutes to <strong>AHMAD YANI</strong> INTERNATIONAL
                  AIRPORT
                </h1>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/Images/icon/transportation/rail.png"
                  alt="img-rail"
                />
                <h1>
                  10 Minutes to <strong>TAWANG</strong> RAIL STATION
                </h1>
              </div>
            </div>
          </div>
          {/* TRANSPORTATION END */}
        </div>
      </div>
      {/* button back */}
      <div className="flex justify-center pt-6 font-semibold">
        <a
          href="#venue"
          className="border border-[#D2AD83] text-[#D2AD83] hover:bg-[#D2AD83] hover:text-white py-2 px-10 rounded-full"
          onClick={() => handleClick(setDetailSubVenue)}
        >
          Previous Page
        </a>
      </div>
      {/* button back end */}
    </div>
  );
}
