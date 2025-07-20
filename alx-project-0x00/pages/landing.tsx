import Button from "@/components/Button";
import Card from "@/components/Card";




const Landing: React.FC =  () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">
                <Card />
            </h1>
            <div className="flex flex-col gap-4 mt-4">
                <Button title="Small - shapes"  styles="rounded-sm text-sm"/>
                <Button title="medium - shapes"  styles="rounded-md text-base"/>
                <Button title="Large - shapes"  styles="rounded-full text-lg"/>
                <Button title="Large" styles="rounded-lg text-lg" /> 
            </div>
        </div>
    )
}

export default Landing;