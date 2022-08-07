import moonImage from "assets/destination/image-moon.webp";
import marsImage from "assets/destination/image-mars.webp";
import europaImage from "assets/destination/image-europa.webp";
import titanImage from "assets/destination/image-titan.webp";

interface DestinationItem {
  name: string;
  image?: string;
  description: string;
  distance: string;
  travel: string;
}

interface IProps {
  data: DestinationItem[];
}

function Destination({ data }: IProps) {
  const [moon, mars, europa, titan] = data;

  moon.image = moonImage;
  mars.image = marsImage;
  europa.image = europaImage;
  titan.image = titanImage;

  return (
    <div>
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> PICK YOUR DESTINATION
      </h1>

      <div>
        <div>
          <img src={moon.image} alt="THE MOON" />
        </div>

        <div>
          <div className="underline-indicators">
            <button type="button">MOON</button>
            <button type="button">MARS</button>
            <button type="button">EUROPA</button>
            <button type="button">TITAN</button>
          </div>

          <article>
            <h2>MOON</h2>

            <p>{data[0].description}</p>

            <div>
              <div>
                <h3>AVG. DISTANCE</h3>
                <p>{data[0].distance}</p>
              </div>
              <div>
                <h3>EST. TRAVEL TIME</h3>
                <p>{data[0].travel}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Destination;
