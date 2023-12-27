import backgroundImage from '../assets/images/background.jpg'
<<<<<<< HEAD
import BodyRoomServices from '../Jhony/BodyRoomServices';
=======
import BodyRoomServices from '../components/Body/BodyRoomServices';

>>>>>>> main
import HeaderAyB from '../components/Header/HeaderAyB';


function Roomservice() {
  return (
    <>
      <div>
        <div
          className="
          absolute 
          top-0 
          left-0 
          w-full 
          h-full 
          bg-cover 
          bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "blur(150px)",
            zIndex: -1,
            opacity: 0.9,
          }}
        ></div>
        <HeaderAyB></HeaderAyB>
<<<<<<< HEAD
        <BodyRoomServices/>
=======
        <BodyRoomServices></BodyRoomServices>
>>>>>>> main
      </div>
    </>
  );
}

export default Roomservice;
