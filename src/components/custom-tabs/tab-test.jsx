import Tabs from "./tabs";
function RandomComponent(){
    return <h2>content from random componet</h2>
}
export default function CustomTabs(){
    const tabs=[
        {
            label:"Tab1",
            content:<div>content for tab1</div>
        },
        {
            label:"Tab2",
            content:<div>content for tab2</div>
        },
        {
            label:"Tab3",
            content:<RandomComponent/>
        }
    ]
    return <Tabs tabsContent={tabs}></Tabs>
}
