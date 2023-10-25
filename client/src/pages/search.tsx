import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { getSampleData } from "@/tools/DataManager";
import { Sample } from "@/tools/samples.model";
import { forEachChild } from "typescript";

export default function Search({samples}:{samples:Sample[]}) {  

    const onSearch = (e:any) => {
        let query:string = e.target.value;
        // If the result is nothin', the value remains nothin'.
        let result:Sample[] = []; 
        // Searches if the value of a name matches the query. Ignores case sentitivity.
        if (query) {
            for(let n:number=0; n<samples.length; n++) {
                if (samples[n].name.toLowerCase().startsWith(query.toLowerCase())) {
                    result.push(samples[n]);
                    break;
                }}}
        setSearchQuery(result[0]);
        // setSelected(result[0]); // For updating on type.
    }

    const onSubmit = (e:any) => {
        setSelected(searchQuery);
    }

    const [selected, setSelected] = useState<Sample>();
    const [searchQuery, setSearchQuery] = useState<Sample>();

    return (
        <>
            {
            (samples.length > 0) ?
            <>
            <Navigation />
            <div className="flex flex-wrap">
                <div className="pr-5 pb-5">
                    <div> {/* Textbox */}
                        <input id="searchbar" type="text" className="text-[#035074] p-2 rounded-md" onChange={onSearch} />
                    </div>
                    <div>
                        <input type="button" value="Search" onClick={onSubmit}
                            placeholder="Enter keyword..."
                            className="bg-white text-[#035074] mt-2 p-2 rounded-md active:bg-[#EEAA40]" />
                    </div>
                </div>
                
                {selected ? 
                    <div>
                        <div id="txtName" className="font-title font-bold text-xl pb-3">{selected.name}</div>
                        <div id="txtDescription" className="max-w-[600px] pb-3">{selected.description}</div>
                        <div className="pb-4">
                            <a href="{selected.url}" target="_blank" id="lnkUrl" className="hover:underline">{selected.url}</a>
                        </div>
                        <div className="flex flex-nowrap">
                            <div>
                                <Image src={"/images/" + selected.images[0].filename} width={75} height={75} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                            </div>
                            <div>
                                <Image src={"/images/" + selected.images[1].filename} width={50} height={50} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                            </div>
                            <div>
                                <Image src={"/images/" + selected.images[2].filename} width={50} height={50} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                            </div>
                            <div>
                                <Image src={"/images/" + selected.images[3].filename} width={50} height={50} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                            </div>
                        </div>
                    </div>
                    : <div className="w-screen">No matches found...</div>}
            </div>
            </>
        :
            <>No portfolio samples available :(</>
        }
    </>
    );
}

export async function getServerSideProps() {
    return {
      props: {
        samples: await getSampleData()
      }
    }
}