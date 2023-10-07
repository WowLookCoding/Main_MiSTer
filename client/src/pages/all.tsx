import Image from "next/image";

import Navigation from "@/components/Navigation";
import { getSampleData } from "@/tools/DataManager";
import { Sample } from "@/tools/samples.model";

export default function AllView({samples}:{samples:Sample[]}) {
    return (
        <>
            {
            (samples.length > 0) ?
                <>
                <Navigation />
                <div className="flex flex-col flex-wrap">
                    {samples.map((data:Sample,n:number) => {
                        return (
                            <div key={n} className="flex flex-nowrap mb-10">
                                <div className="mr-2.5">
                                    <Image src={"/images/" + data.images[0].filename} width={75} height={75} alt="Portfolio Sample" className="mr-1" />
                                </div>
                                <div>
                                    <div className="font-title font-bold text-xl pb-2">{data.name}</div>
                                    <div className="pb-2 max-w-[600px]">{data.description}</div>
                                    <a href="{data.url}" className="hover:underline" target="_blank">{data.url}</a>
                                </div>
                            </div>
                        );
                    })}
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