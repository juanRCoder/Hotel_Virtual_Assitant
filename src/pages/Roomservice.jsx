import backgroundImage from '../assets/images/background.jpg'
import BodyRoomServices from '../components/Body/BodyRoomServices';

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
        <BodyRoomServices></BodyRoomServices>
      </div>
    </>
  );
}

export default Roomservice;
