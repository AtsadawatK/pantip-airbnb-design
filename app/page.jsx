import Image from "next/image";
import PantipRealtime from "./components/PantipRealtime";
import RoomTopic from "./components/RoomTopic";
import Tag from "./components/Tag";
import Highlight from "./components/Highlight";

export default function Home() {
  return (
   <>
   <Highlight />
<PantipRealtime />
<RoomTopic />
<Tag />
   </>
  );
}
