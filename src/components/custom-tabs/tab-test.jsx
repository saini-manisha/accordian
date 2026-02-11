import Tabs from "./tabs"
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
            content:<div>content for tab3</div>
        }
    ]
    return <Tabs tabsContent={tabs}></Tabs>
}
