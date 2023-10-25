import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { getSampleData } from "@/tools/DataManager";
import { Sample } from "@/tools/samples.model";
import { getRandom } from "@/tools/Toolkit";

export default function Random({samples}:{samples:Sample[]}) {

    const onSurprise = (e:any) => {
        setSelected(samples[getRandom(0,3)]);
    }

    const [selected, setSelected] = useState<Sample>(samples[getRandom(0,3)]);

    return (
        <>
            {
            (samples.length > 0) ?
                <>
                <Navigation /> 
                <div className="flex flex-wrap">
                    <div className="pr-5 pb-5">
                        <input type="button" value="Surprise Me!" className="bg-white text-[#035074] p-2 rounded-md active:bg-[#EEAA40]" onClick={onSurprise} />
                    </div>

                    <div>
                        <div id="txtName" className="font-title font-bold text-xl pb-3">{selected.name}</div>
                        <div id="txtDescription" className="max-w-[600px] pb-3">{selected.description}</div>
                        <div className="pb-4">
                            <a href="???" target="_blank" id="lnkUrl" className="hover:underline">{selected.url}</a>
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