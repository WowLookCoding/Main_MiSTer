import { useState } from "react";
import Image from 'next/image';
import { getSampleData } from "@/tools/DataManager";
import { Sample } from "@/tools/samples.model";
import Navigation from "@/components/Navigation";

export default function Home({samples}:{samples:Sample[]}) {

  // ---------------------------------------------- event handlers
  const onChangeSample = (e:any) => {
    // update state variable which forces a re-render of this component
    setSelected(samples[e.target.value]);
  }

  // ---------------------------------------------- state variables
  // the currently selected portfolio sample stored in a state variable
  const [selected, setSelected] = useState<Sample>(samples[0]);  

  return (
    <>
      {
        (samples.length > 0) ?
          <>
          <Navigation /> 
          <div className="flex flex-wrap">
            <nav className="pr-5 pb-5">
                <select id="lstSamples" 
                    className="bg-white hover:bg-opacity-90 text-[#035074] py-2 px-3 rounded mb-3"
                    onChange={onChangeSample}>
                    {/* adding options to the dropdown based on samples state variable */}
                    {samples.map((data:Sample,n:number) => {
                        return <option key={n} value={n}>{data.name}</option>
                    })}
                </select>
            </nav>

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