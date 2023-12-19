import ItemWindow from "./components/ItemWindow";
import ItemWindowContainer from "./components/ItemWindowContainer";

export default function App() {
  return (
    <>
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-5 rotate-45">
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
            </div>
            <div className="flex flex-row gap-x-5 rotate-45 ">
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
            </div>
            <div className="flex flex-row rotate-45">
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
                <div className="bg-yellow-200 shadow-md rounded-full h-[90px] w-[150px] m-5 "></div>
            </div>
        </div>
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