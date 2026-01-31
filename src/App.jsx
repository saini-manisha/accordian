import Accordian from "./components/Accordian"
import "./App.css"
import CreateRandomColor from "./components/CreateRandomColor"
import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider"
export default function App(){
  return <div> 
    {/* <Accordian></Accordian> 
    <CreateRandomColor></CreateRandomColor> */}
    {/* <StarRating noOfStar={10}></StarRating> */}
    <ImageSlider url="https://picsum.photos/v2/list" limit={"10"} page={"1"} ></ImageSlider>
  </div>
} 