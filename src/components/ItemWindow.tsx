import { useReducer } from "react";
import { IconSVG } from "./IconSVG";

type WindowSizeState = {
    status: "standard" | "closed" | "minimized" | "expanded",
    propertyString: String,
};
type WindowSizeAction = "close" | "minimize" | "expand";

function windowSizeReducer(state: WindowSizeState, action: WindowSizeAction): WindowSizeState {
    switch (action) {
        case "close":
            return {
                status: "closed",
                propertyString: "hidden",
            };

        case "minimize":
            if (state.status === "minimized") {
                return {
                    status: "standard",
                    propertyString: "__use_standard",
                };
            } else {
                return {
                    status: "minimized",
                    propertyString: "w-fit h-fit",
                };
            }

        case "expand":
            if (state.status === "expanded") {
                return {
                    status: "standard",
                    propertyString: "__use_standard",
                };
            } else {
                return {
                    status: "expanded",
                    propertyString: "col-span-6",
                };
            }
    }
}

export default function ItemWindow(
    {
        children,
        standardWidth
    }: {
        children: React.ReactNode,
        standardWidth: "1/3" | "1/2" | "2/3" | "1"
    }
) {
    const [windowSizeState, windowSizeDispatch] = useReducer(windowSizeReducer, {
        status: "standard",
        propertyString: "col-span-6"
    });

    const standardWidthPropertyStrings = {
        "1/3": "col-span-6 md:col-span-3 lg:col-span-2",
        "1/2": "col-span-6 md:col-span-3",
        "2/3": "col-span-6 md:col-span-4",
        "1": "col-span-6"
    }

    return (
        <>
            <div className={`bg-zinc-100 hover:bg-zinc-200 bg-opacity-75 rounded-xl p-5 shadow-2xl ${windowSizeState.status === "standard" ? standardWidthPropertyStrings[standardWidth] : windowSizeState.propertyString}`}>
                <div className="group flex flex-row gap-x-2 pb-2 w-fit">
                    <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#ED6A5E] border-[1px] border-[#df6054]" onClick={() => windowSizeDispatch("close")}>
                        <div className="flex flex-col justify-center invisible group-hover:visible">
                            <IconSVG icon="CROSS" color="red" width="w-[9px]" height="h-[9px]"></IconSVG>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#F5BF4F] opacity-100 border-[1px] border-[#e7b34c]" onClick={() => windowSizeDispatch("minimize")}>
                        <div className="flex flex-col justify-center invisible group-hover:visible">
                            <IconSVG icon="MINUS" color="yellow" width="w-[12px]" height="h-[12px]"></IconSVG>
                        </div>
                    </div>
                    {standardWidth === "1"
                        ? <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] border-[1px] border-[#cfc8c6]" onClick={() => windowSizeDispatch("expand")}></div>
                        : <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] md:bg-[#63C856] border-[1px] border-[#cfc8c6] md:border-[#5db94d]" onClick={() => windowSizeDispatch("expand")}>
                            <div className="flex flex-col justify-center invisible group-hover:md:visible">
                                <IconSVG icon="PLUS" color="green" width="w-[12px]" height="h-[12px]"></IconSVG>
                            </div>
                        </div>
                    }
                </div>

                {(windowSizeState.status !== "minimized" && windowSizeState.status !== "closed") && children}
            </div>
        </>
    )
}