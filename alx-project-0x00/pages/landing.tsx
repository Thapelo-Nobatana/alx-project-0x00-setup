import Button from "@/components/Button";
import Card from "@/components/Card";




const Landing: React.FC =  () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">
                <Card />
            </h1>
            <div className="flex flex-col gap-4 mt-6">
                <Button title="Small Rounded"  styles="rounded-sm text-sm"/>
                <Button title="Medium Rounded"  styles="rounded-md text-base"/>
                <Button title="Large Fully Rounded"  styles="rounded-full text-lg"/>

            </div>
        </div>
    )
}

export default Landing;