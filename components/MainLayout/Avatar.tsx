import React, { useEffect, useState } from "react";

// Styling
import { AvatarImage } from "@styles/MainPageStyles";

// Redux
import { useDispatch } from "react-redux";

type Props = {
  source?: string;
  style?: object;
};

const Avatar = (props: Props) => {
  const [photo, setPhoto] = useState(
    "https://thedavid.plitz7.com/uploads/plitz-sq-logo-rounded.jpg"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const GetData = async () => {
      await fetch("https://thedavid.plitz7.com/api/users/")
        .then((res) => res.json())
        .then((data) => {
          setPhoto(`https://thedavid.plitz7.com/${data[0].photo}`);
          dispatch({ type: "UPDATE_NAME", userName: data[0].fullname });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    GetData();

    return () => {
      GetData();
    };
  }, []);

  return <AvatarImage source={{ uri: photo }} style={props.style} />;
};

export default Avatar;
