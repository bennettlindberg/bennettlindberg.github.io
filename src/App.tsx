import ItemWindow from "./components/ItemWindow";
import ItemWindowContainer from "./components/ItemWindowContainer";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
        <NavBar></NavBar>
        <ItemWindowContainer>
            <ItemWindow standardWidth="1/3">
                Hi
            </ItemWindow>
            <ItemWindow standardWidth="1/3">
                To
            </ItemWindow>
            <ItemWindow standardWidth="1/3">
                To
            </ItemWindow>
        </ItemWindowContainer>
        <ItemWindowContainer>
            <ItemWindow standardWidth="1/3">
                Hi
            </ItemWindow>
            <ItemWindow standardWidth="2/3">
                To
            </ItemWindow>
        </ItemWindowContainer>
        <ItemWindowContainer>
            <ItemWindow standardWidth="1/2">
                Hi
            </ItemWindow>
            <ItemWindow standardWidth="1/2">
                To
            </ItemWindow>
        </ItemWindowContainer>
        <ItemWindowContainer>
            <ItemWindow standardWidth="1/3">
                Hi
            </ItemWindow>
            <ItemWindow standardWidth="1/2">
                To
            </ItemWindow>
        </ItemWindowContainer>
        <ItemWindowContainer>
            <ItemWindow standardWidth="1">
                Hi
            </ItemWindow>
        </ItemWindowContainer>
    </>
  )
}