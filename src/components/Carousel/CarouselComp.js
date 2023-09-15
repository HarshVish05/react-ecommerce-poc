import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import styles from "./CarouselComp.module.css";
import mobiles from "../../assets/mobiles.png";
import electronics from "../../assets/electronics.jpg";
import fashion from "../../assets/fashion.jpg";
import books from "../../assets/books.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function CarouselComp({ onShowMore }) {
  // const {onShowMore} = props;
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const handleCategory = (category) => {
    navigate("/more", { state: { category } });
    // setProduct('')
  };

  // useEffect(()=> {
  //   console.log('useeffect', product)
  //   onShowMore(product)
  // }, [product])
  const isAdmin = localStorage.getItem('admin')==='true';

  return (
    <>
    {isAdmin && (
    <Link to="/addProducts">
    <Button variant="warning" className={styles.addProducts}>Add Products </Button>
    </Link>
    )}
      <Carousel data-bs-theme="dark" className={styles.carousel}>
        <Carousel.Item>
          <img className={styles.image} src={mobiles} alt="First slide" />
          <Carousel.Caption>
            <h5>Mobiles</h5>
            {/* <Link to="/more"> */}
            <Button variant="warning" onClick={() => handleCategory("mobile")}>
              Show More
            </Button>
            {/* </Link> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.image} src={electronics} alt="Second slide" />
          <Carousel.Caption>
            <h5>Electronics</h5>
            {/* <Link to="/more"> */}
            <Button
              variant="warning"
              onClick={() => handleCategory("electronics")}
            >
              Show More
            </Button>
            {/* </Link> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.image} src={fashion} alt="Third slide" />
          <Carousel.Caption>
            <h5>Fashion</h5>
            {/* <Link to="/more"> */}
            <Button variant="warning" onClick={() => handleCategory("fashion")}>
              Show More
            </Button>
            {/* </Link> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.image} src={books} alt="Fourth slide" />
          <Carousel.Caption>
            <h5>Books</h5>
            {/* <Link to="/more"> */}
            <Button variant="warning" onClick={() => handleCategory("books")}>
              Show More
            </Button>
            {/* </Link> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselComp;
