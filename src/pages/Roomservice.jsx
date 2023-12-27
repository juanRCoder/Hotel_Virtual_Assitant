import backgroundImage from '../assets/images/background.jpg'
import BodyRoomService from '../components/Body/BodyRoomService';
import HeaderAyB from '../components/Header/HeaderAyB';


function Roomservice() {
  return (
    <>
      <div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "blur(150px)",
            zIndex: -1,
            opacity: 0.9,
          }}
        ></div>
        <HeaderAyB></HeaderAyB>
        <BodyRoomService/>
      </div>
    </>
  );
}

export default Roomservice;
