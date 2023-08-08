import React from "react";
import ListItem from "./ListItem";
import Userdash from "./userdash";

const Home = (props) => {
  const Data = (item, size) => {
    props.onData(item, size);
  };

  return (
    <div>
      {<Userdash onSaveData={props.onSaveData} />}
      {props.itemlist.map((item) => (
        <ListItem item={item} key={item.id} onData={Data} />
      ))}
    </div>
  );
};

export default Home;