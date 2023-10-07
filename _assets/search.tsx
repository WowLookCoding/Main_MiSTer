import Image from "next/image";
import { getSampleData } from "@/tools/DataManager";
import { Sample } from "@/tools/samples.model";
import Navigation from "@/components/Navigation";

export default function Random({samples}:{samples:Sample[]}) {  

    return (
        <>
            {
            (samples.length > 0) ?
            <>
            <Navigation />
            <div className="flex flex-wrap">
                <div className="pr-5 pb-5">
                    <div>
                        <input type="text" className="text-[#035074] p-2 rounded-md" />
                    </div>
                    <div>
                        <input type="button" value="Search" 
                            placeholder="Enter keyword..."
                            className="bg-white text-[#035074] mt-2 p-2 rounded-md active:bg-[#EEAA40]" />
                    </div>
                </div>

                <div>
                    <div id="txtName" className="font-title font-bold text-xl pb-3">???</div>
                    <div id="txtDescription" className="max-w-[600px] pb-3">???</div>
                    <div className="pb-4">
                        <a href="{selected.url}" target="_blank" id="lnkUrl" className="hover:underline">???</a>
                    </div>
                    <div className="flex flex-nowrap">
                        <div>
                            <Image src="/images/???" width={75} height={75} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                        </div>
                        <div>
                            <Image src="/images/???" width={50} height={50} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                        </div>
                        <div>
                            <Image src="/images/???" width={50} height={50} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                        </div>
                        <div>
                            <Image src="/images/???" width={50} height={50} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
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