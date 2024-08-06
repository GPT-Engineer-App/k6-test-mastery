import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Independent nature</li>
                <li>Excellent hunters</li>
                <li>Flexible and agile bodies</li>
                <li>Keen senses, especially hearing and vision</li>
                <li>Variety of coat colors and patterns</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fun Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Cats sleep for about 70% of their lives</li>
                <li>A group of cats is called a "clowder"</li>
                <li>Cats have over 20 different vocalizations</li>
                <li>The first cat in space was French, named Felicette</li>
                <li>Cats can jump up to 6 times their length</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover rounded-lg shadow-lg w-full max-w-2xl h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
