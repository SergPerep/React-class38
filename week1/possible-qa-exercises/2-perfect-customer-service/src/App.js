import "./App.css";
import Guarantees from "./components/Guarantees";
import chatImg from "./img/chat.png";
import coinImg from "./img/coin.png";
import fDeliveryImg from "./img/f-delivery.png";

function App() {
  const guaranteeList = [
    {
      title: "Free shipping",
      src: fDeliveryImg,
      alt: "truck on a road",
      desc: "Vivamus pharetra, ante lobortis tincidunt tincidunt, erat elit interdum elit, et tincidunt mauris lorem sit amet lorem",
    },
    {
      title: "100% Money back",
      src: coinImg,
      alt: "hand with a coin",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    },
    {
      title: "Online support 24/7",
      src: chatImg,
      alt: "chat clouds",
      desc: "Pellentesque dictum scelerisque dolor, a placerat diam faucibus a. Phasellus vel ipsum hendrerit, tincidunt ante at, dignissim enim.",
    },
  ];
  return (
    <div className="App">
      <Guarantees guaranteeList={guaranteeList} />
    </div>
  );
}

export default App;
