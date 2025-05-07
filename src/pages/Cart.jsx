import { useDispatch, useSelector } from "react-redux";
import {
  decreaseByOne,
  increaseByOne,
  removeItem,
} from "../components/store/slices/items";

export default function Cart() {
  const itemsObject = useSelector((state) => state.cartItems.items);
  const dispatch = useDispatch();
  const AllItems = Object.values(itemsObject);
  // const totalPrice = AllItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="h-100 gradient-custom py-5">
      <div className="container">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4 shadow">
            
              <div className="card-body">
                {AllItems.length === 0 ? (
                  <p className="text-center fs-5 text-muted">
                    Your cart is empty.
                  </p>
                ) : (
                  AllItems.map((item) => (
                    <div className="row mb-4" key={item.id}>
                      <div className="col-lg-3 col-md-12 mb-3 mb-lg-0">
                        <div className="bg-image hover-zoom ripple rounded">
                          <img
                            src={item.images[0]}
                            className="w-100"
                            alt={item.title}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-3 mb-lg-0">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p className="mb-1">Rating: {item.rating}</p>
                        <div>
                          <button
                            className="btn btn-sm btn-primary me-2 mb-2"
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <i className="fas fa-trash" />
                          </button>
                          
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
                        <div
                          className="d-flex align-items-center mb-3"
                          style={{ maxWidth: "250px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() => dispatch(decreaseByOne(item.id))}
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="form-control text-center"
                            min="1"
                          />
                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() => dispatch(increaseByOne(item.id))}
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>
                            ${(item.price * item.quantity).toFixed(2)}
                          </strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
