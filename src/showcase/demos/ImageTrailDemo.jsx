import ImageTrail from "../../components/ImageTrail";

export default function ImageTrailDemo() {

    const images = [

      "https://picsum.photos/id/287/300/300",
      "https://picsum.photos/id/1001/300/300",
      "https://picsum.photos/id/1025/300/300",
      "https://picsum.photos/id/1026/300/300",
      "https://picsum.photos/id/1027/300/300",
      "https://picsum.photos/id/1028/300/300",
      "https://picsum.photos/id/1029/300/300",

    ];

    return (

        <div
            style={{
                height:"600px",
                position:"relative",
                overflow:"hidden"
            }}
        >

            <ImageTrail
                items={images}
                variant={1}
            />

        </div>

    );

}
