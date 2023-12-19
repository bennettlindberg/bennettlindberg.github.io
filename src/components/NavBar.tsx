import { IconSVG } from "./IconSVG";

export default function NavBar() {
    return (
        <>
            <div className="bg-gradient-to-b to-red-100 from-purple-100 bg-opacity-75 rounded-xl shadow-2xl flex flex-row gap-x-5 m-5 justify-between">
                <div className="bg-gradient-to-tr to-red-600 from-purple-500 hover:from-red-600 hover:to-purple-500 rounded-xl p-3 shadow-2xl">
                    <IconSVG icon="LOGO" color="fill-white" width="w-[40px]" height="h-[40px]" />
                </div>
                <div className="flex flex-row gap-x-5 items-center flex-grow">
                    <div className="font-normal text-xl text-black hover:underline hover:font-bold">
                        https://bennettlindberg.com
                    </div>
                    <div className="font-normal text-xl text-slate-600 hover:underline hover:font-bold">
                        /about
                    </div>
                    <div className="font-normal text-xl text-slate-600 hover:underline hover:font-bold">
                        /projects
                    </div>
                    <div className="font-normal text-xl text-slate-600 hover:underline hover:font-bold">
                        /experience
                    </div>
                    <div className="font-normal text-xl text-slate-600 hover:underline hover:font-bold">
                        /education
                    </div>
                </div>
                <div className="bg-gradient-to-tr to-red-600 from-purple-500 hover:from-red-600 hover:to-purple-500 rounded-xl p-3 shadow-2xl">
                    <IconSVG icon="MENU" color="fill-white" width="w-[40px]" height="h-[40px]" />
                </div>
            </div>
        </>
    )
}