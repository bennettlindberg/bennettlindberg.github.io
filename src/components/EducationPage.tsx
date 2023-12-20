import { useContext, useEffect } from "react";
import { AppContext } from "../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "./ItemWindow";
import ItemWindowContainer from "./ItemWindowContainer";

export default function EducationPage() {
    const {setTabTitle} = useContext(AppContext);
    useEffect(() => setTabTitle("Education | Bennett Lindberg"), []);
    
    return (
        <>
            <PageTemplate pageType="education">
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
            </PageTemplate>
        </>
    )
}