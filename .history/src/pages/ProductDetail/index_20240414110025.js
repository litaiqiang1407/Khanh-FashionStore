import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);
function ProductDetail() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const productDetailURL = `http://localhost/homeware/api/ProductDetail.php`;
  const addToCartURL = `http://localhost/homeware/actions/addToCart.php`;

  const handleAddToCart = () => {
    const data = {
      userID: 1,
      productID: id,
      quantity: quantity,
    };
    interactData(addToCartURL, "POST", data, (data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    interactData(`${productDetailURL}?productID=${id}`, "GET", null, (data) => {
      setProduct(data);
    });
  }, [id]);
  return <div className={cx("product-detail")}></div>;
}

export default ProductDetail;
