import { useEffect, useReducer, useState } from "react";

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
    const [standardWidthProperty, setStandardWidthProperty] = useState<String>("col-span-6");
    const [windowSizeState, windowSizeDispatch] = useReducer(windowSizeReducer, {
        status: "standard",
        propertyString: "col-span-6"
    });

    function updateStandardWidthProperty() {
        switch (standardWidth) {
            case "1/3":
                setStandardWidthProperty("col-span-2");
                break;

            case "1/2":
                setStandardWidthProperty("col-span-3");
                break;

            case "2/3":
                setStandardWidthProperty("col-span-4");
                break;

            default:
                setStandardWidthProperty("col-span-6");
        }

        if (window.innerWidth < 830) {
            setStandardWidthProperty("col-span-6");
        }
    }

    useEffect(() => {
        updateStandardWidthProperty();

        window.addEventListener('resize', updateStandardWidthProperty);

        return () => window.removeEventListener('resize', updateStandardWidthProperty);
    }, []);

    return (
        <>
            <div className={`bg-zinc-100 hover:bg-zinc-200 opacity-75 rounded-xl p-5 shadow-2xl ${windowSizeState.status === "standard" ? standardWidthProperty : windowSizeState.propertyString}`}>
                <div className="flex flex-row gap-x-2 pb-2">
                    <div className="rounded-full h-3 w-3 bg-red-500" onClick={() => windowSizeDispatch("close")}></div>
                    <div className="rounded-full h-3 w-3 bg-yellow-500" onClick={() => windowSizeDispatch("minimize")}></div>
                    {standardWidthProperty === "col-span-6"
                        ? <div className="rounded-full h-3 w-3 bg-slate-400"></div>
                        : <div className="rounded-full h-3 w-3 bg-green-500" onClick={() => windowSizeDispatch("expand")}></div>
                    }
                </div>

                {(windowSizeState.status !== "minimized" && windowSizeState.status !== "closed") && children}
            </div>
        </>
    )
}